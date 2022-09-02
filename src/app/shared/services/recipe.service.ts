import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore/lite';
import { Recipe, RecipeDto } from 'src/app/typing/recipe';
import { firebaseConfig } from '../../../../firebase-config';
import { MeatType } from '../../enums/meatTypes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipesCache: Recipe[] | null= null;

  constructor() { }

  async getRecipes(): Promise<Recipe[]> {
    if(this.recipesCache) return this.recipesCache;
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const recipesCol = collection(db, 'recipes');
    const recipesSnapshot = await getDocs(recipesCol);
    const recipesSource = recipesSnapshot.docs.map(doc => Object.assign(doc.data(), { id: doc.id})) as RecipeDto[];
    const recipesList = recipesSource.map((x): Recipe => {
      const meatType = getRecipeMeatType(x.ingredients);
      (x as Recipe).meatType = meatType;
      return x as Recipe;
    })
    this.recipesCache = recipesList;
    return recipesList;
  }

  async getRecipeById(id: string): Promise<RecipeDto> {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const docRef = doc(db, 'recipes', id);
    const someDoc = await getDoc(docRef)
    return someDoc.data() as RecipeDto;
  }
}

const meatTypeByMeatName: {[key: string]: MeatType} = {
  "говядина": MeatType.beef,
  "свинина": MeatType.pork,
  "индейка": MeatType.turkey,
  "курица": MeatType.chiken,
  "куриное филе": MeatType.chiken, 
  "куриные голени": MeatType.chiken, 
  "куриные крылышки": MeatType.chiken
}

function getRecipeMeatType(ingredientsList: string[]): MeatType{
  for(const ingredientMix of ingredientsList ){
    // in db ingredient is like <name>*<amount>
    // * is a separator
    // remove the separator and amount and get the name only
    const ingredientName = ingredientMix.replace(/\*.*/, '');
    const possiblyMeatType = meatTypeByMeatName[ingredientName];
    if(possiblyMeatType) return possiblyMeatType;
  }
  return MeatType.other;
}
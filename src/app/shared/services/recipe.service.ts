import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { Recipe, RecipeDto } from 'src/app/typing/recipe';
import { firebaseConfig } from '../../../../firebase-config';
import { MeatType } from '../../enums/meatTypes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  async getRecipes(): Promise<Recipe[]> {
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
    return recipesList;
  }
}

const meatTypeByMeatName: {[key: string]: MeatType} = {
  "говядина": MeatType.beef,
  "свинина": MeatType.pork,
  "индейка": MeatType.turkey,
  "курица": MeatType.chiken,
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
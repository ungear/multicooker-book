import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { Recipe } from 'src/app/typing/recipe';
import { firebaseConfig } from '../../../../firebase-config';


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
    const recipesList = recipesSnapshot.docs.map(doc => doc.data()) as Recipe[];
    return recipesList;
  }
}
import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseConfig } from '../../../../firebase-config';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(){
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    return getCities(db);
  }
}

async function getCities(db: any) {
  const recipesCol = collection(db, 'recipes');
  const recipesSnapshot = await getDocs(recipesCol);
  const cityList = recipesSnapshot.docs.map(doc => doc.data());
  return cityList;
}
import { MeatType } from '../enums/meatTypes';

export interface RecipeDto {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  page: string;
}

export interface Recipe extends RecipeDto {
  meatType: MeatType;
}


export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  page: string;
}

export interface Ingredient {
  name: string;
  amount: string;
}

import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Recipe } from 'src/app/typing/recipe';
import { MeatType } from '../../enums/meatTypes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  isLoading = false;
  originalRecipes: Recipe[] = [];
  visibleRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  async ngOnInit() {
    this.isLoading = true;
    this.originalRecipes = await this.recipeService.getRecipes();
    this.visibleRecipes = this.originalRecipes;
    this.isLoading = false;
  }

  onSearchTearmChanged(newValue: string){
    console.log(newValue)
  }

  onMeatTypeChanged(newMeatType: MeatType | null){
    this.visibleRecipes = newMeatType 
      ? this.originalRecipes.filter(x => x.meatType === newMeatType)
      : this.originalRecipes;
  }
}

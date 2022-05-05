import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Recipe } from 'src/app/typing/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  isLoading = false;
  recipes?: Recipe[];

  constructor(private recipeService: RecipeService) { }

  async ngOnInit() {
    this.isLoading = true;
    this.recipes = await this.recipeService.getRecipes();
    this.isLoading = false;
  }

  onSearchTearmChanged(newValue: string){
    console.log(newValue)
  }
}

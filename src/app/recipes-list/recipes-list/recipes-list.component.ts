import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  async ngOnInit() {
    const recipes = await this.recipeService.getRecipes();
    console.log(recipes);
  }
}

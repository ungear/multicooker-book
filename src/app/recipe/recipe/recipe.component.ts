import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { RecipeDto } from 'src/app/typing/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe!: RecipeDto;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  async ngOnInit() {
    const recipeId = this.route.snapshot.params['id'];
    this.recipe = await this.recipeService.getRecipeById(recipeId);
  }

}

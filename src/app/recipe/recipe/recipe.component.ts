import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  async ngOnInit() {
    const recipeId = this.route.snapshot.params['id'];
    const recipe = await this.recipeService.getRecipeById(recipeId);
  }

}

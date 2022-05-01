import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';


@NgModule({
  declarations: [
    RecipeComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }

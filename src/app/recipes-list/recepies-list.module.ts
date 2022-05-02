import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecepiesListRoutingModule } from './recepies-list-routing.module';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeSnapshotComponent } from './recipe-snapshot/recipe-snapshot.component';



@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeSnapshotComponent
  ],
  imports: [
    CommonModule,
    RecepiesListRoutingModule
  ]
})
export class RecepiesListModule { }

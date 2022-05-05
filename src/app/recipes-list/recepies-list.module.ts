import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecepiesListRoutingModule } from './recepies-list-routing.module';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeSnapshotComponent } from './recipe-snapshot/recipe-snapshot.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeSnapshotComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    RecepiesListRoutingModule,
    FormsModule,
  ]
})
export class RecepiesListModule { }

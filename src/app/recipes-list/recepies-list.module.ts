import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecepiesListRoutingModule } from './recepies-list-routing.module';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeSnapshotComponent } from './recipe-snapshot/recipe-snapshot.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { MeatTypeSelectorComponent } from './meat-type-selector/meat-type-selector.component';


@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeSnapshotComponent,
    SearchbarComponent,
    MeatTypeSelectorComponent
  ],
  imports: [
    CommonModule,
    RecepiesListRoutingModule,
    FormsModule,
  ]
})
export class RecepiesListModule { }

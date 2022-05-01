import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecepiesListRoutingModule } from './recepies-list-routing.module';
import { RecipesListComponent } from './recipes-list/recipes-list.component';



@NgModule({
  declarations: [
    RecipesListComponent
  ],
  imports: [
    CommonModule,
    RecepiesListRoutingModule
  ]
})
export class RecepiesListModule { }

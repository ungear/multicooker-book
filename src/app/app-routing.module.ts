import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'recipes-list',  loadChildren: () => import('./recipes-list/recepies-list.module').then(m => m.RecepiesListModule)},
  { path: 'recipe',  loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule)},
  { path: '', redirectTo: '/recipes-list', pathMatch: 'full'  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

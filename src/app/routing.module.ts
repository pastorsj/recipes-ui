import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantryViewComponent } from 'src/app/pantry/pantry-view/pantry-view.component';
import { RecipesViewComponent } from 'src/app/recipes/recipes-view/recipes-view.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesViewComponent
  },
  {
    path: 'pantry',
    component: PantryViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material.module';
import { RoutingModule } from '../routing.module';

import { RecipeBreadcrumbsComponent } from './components/recipe-breadcrumbs/recipe-breadcrumbs.component';
import { RecipeSearchBarComponent } from './components/recipe-search-bar/recipe-search-bar.component';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { RecipeSectionContainerComponent } from './components/recipe-section-container/recipe-section-container.component';

@NgModule({
  imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule, RoutingModule],
  declarations: [
    RecipeBreadcrumbsComponent,
    RecipeSectionContainerComponent,
    RecipeSearchBarComponent,
    RecipeSearchComponent
  ],
  exports: [
    RecipeBreadcrumbsComponent,
    RecipeSectionContainerComponent,
    RecipeSearchBarComponent,
    RecipeSearchComponent
  ]
})
export class RecipeCommonModule {}

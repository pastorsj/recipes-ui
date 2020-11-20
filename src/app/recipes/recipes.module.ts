import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from 'src/app/material.module';
import { RoutingModule } from 'src/app/routing.module';

import { RecipesViewComponent } from './recipes-view/recipes-view.component';
import { RecipeCommonModule } from '../common/common.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipesViewComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RecipeCommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class RecipesModule { }

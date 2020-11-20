import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from 'src/app/material.module';
import { RoutingModule } from 'src/app/routing.module';

import { PantryViewComponent } from './pantry-view/pantry-view.component';
import { RecipeCommonModule } from '../common/common.module';

@NgModule({
  declarations: [
    PantryViewComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RecipeCommonModule
  ],
  providers: [],
})
export class PantryModule { }

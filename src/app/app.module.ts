import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { RecipeCommonModule } from './common/common.module';
import { RecipesModule } from './recipes/recipes.module';
import { PantryModule } from './pantry/pantry.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RecipeCommonModule,
    RecipesModule,
    PantryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { baseBreadcrumb } from 'src/app/common/models/base.breadcrumb';
import { BreadcrumbService } from 'src/app/common/services/breadcrumb.service';
import { RecipePreview } from './recipe-preview/recipe-preview.model';
import { recipesViewBreadcrumb } from './recipes-view.breadcrumb';

@Component({
  selector: 'recipes-view',
  templateUrl: './recipes-view.component.html',
  styleUrls: ['./recipes-view.component.scss']
})
export class RecipesViewComponent implements OnInit {
  recipes: RecipePreview[] = [];

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.setBreadcrumbs([baseBreadcrumb, recipesViewBreadcrumb]);
    this.getAllRecipes();
  }

  addClicked(): void {
    this.router.navigateByUrl('recipes/add');
  }

  onViewClicked(recipe: RecipePreview): void {
    this.router.navigateByUrl(`recipes/view/${recipe.id}`);
  }

  onEditClicked(recipe: RecipePreview): void {
    this.router.navigateByUrl(`recipes/edit/${recipe.id}`);
  }

  filter(filter: string): void {
    alert('Search not implemented yet');
  }

  private getAllRecipes(): void {
    this.recipes = [
        {
        author: 'Sam Pastoriza',
        id: 1,
        title: 'Chocolate Chip Cookies',
        preview: ''
      }
    ];
  }
}

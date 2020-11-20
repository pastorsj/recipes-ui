import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { baseBreadcrumb } from 'src/app/common/models/base.breadcrumb';
import { BreadcrumbService } from 'src/app/common/services/breadcrumb.service';
import { recipesViewBreadcrumb } from './recipes-view.breadcrumb';

@Component({
  selector: 'recipes-view',
  templateUrl: './recipes-view.component.html',
  styleUrls: ['./recipes-view.component.scss']
})
export class RecipesViewComponent implements OnInit {

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.setBreadcrumbs([baseBreadcrumb, recipesViewBreadcrumb]);
  }

  addClicked(): void {
    this.router.navigateByUrl('recipes/add');
  }

  filter(filter: Event): void {
    alert('Search not implemented yet');
  }
}

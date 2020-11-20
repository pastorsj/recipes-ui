import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { baseBreadcrumb } from 'src/app/common/models/base.breadcrumb';
import { BreadcrumbService } from 'src/app/common/services/breadcrumb.service';
import { pantryViewBreadcrumb } from './pantry-view.breadcrumb';

@Component({
  selector: 'pantry-view',
  templateUrl: './pantry-view.component.html',
  styleUrls: ['./pantry-view.component.scss']
})
export class PantryViewComponent implements OnInit {

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.setBreadcrumbs([baseBreadcrumb, pantryViewBreadcrumb]);
  }

  addClicked(): void {
    this.router.navigateByUrl('pantry/add');
  }

  filter(filter: string): void {
    alert('Search not implemented yet');
  }
}

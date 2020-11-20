import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecipePreview } from './recipe-preview.model';

@Component({
  selector: 'recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.scss']
})
export class RecipePreviewComponent {
  @Input() recipePreview: RecipePreview;
  @Output() onViewClicked: EventEmitter<any> = new EventEmitter();
  @Output() onEditClicked: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteClicked: EventEmitter<any> = new EventEmitter();
}

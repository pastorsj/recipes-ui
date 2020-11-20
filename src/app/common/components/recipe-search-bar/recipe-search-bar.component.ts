import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'recipe-search-bar',
  templateUrl: './recipe-search-bar.component.html',
  styleUrls: ['./recipe-search-bar.component.scss']
})
export class RecipeSearchBarComponent {
  @Input() ariaLabel: string;

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() onAdd: EventEmitter<any> = new EventEmitter<any>();

  search($event: string): void {
    this.onSearch.emit($event);
  }

  add(): void {
    this.onAdd.emit();
  }
}

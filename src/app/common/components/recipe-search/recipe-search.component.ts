import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.setupSearch();
  }

  filter(): void {
    if (this.searchInput.dirty) {
      if (!!this.searchInput.value) {
        this.onSearch.emit(this.searchInput.value);
      } else {
        this.onSearch.emit();
      }
      this.searchInput.markAsPristine();
    }
  }

  clear(): void {
    this.searchInput.patchValue('');
    this.searchInput.markAsDirty();
    this.filter();
  }

  private setupSearch(): void {
    this.searchForm = this.fb.group({
      searchInput: ''
    });
  }

  get searchInput(): AbstractControl {
    // tslint:disable-next-line: no-non-null-assertion
    return this.searchForm.get('searchInput')!;
  }
}

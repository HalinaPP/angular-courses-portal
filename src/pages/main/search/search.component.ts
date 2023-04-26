import { FormControl, FormGroup } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public search: string;
  public searchControl = new FormControl('');
  public searchForm = new FormGroup({
    search: new FormControl(''),
  });

  @Output() filterCoursesEvent = new EventEmitter<string>();

  public searchItem(): void {
    const { search } = this.searchForm.getRawValue();
    this.filterCoursesEvent.emit(search);
  }
}

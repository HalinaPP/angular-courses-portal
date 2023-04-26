import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public searchValue: string;

  public filterItems(newSearchValue: string) {
    this.searchValue = '';
    if (newSearchValue.length > 2) {
      this.searchValue = newSearchValue;
    }
  }
}

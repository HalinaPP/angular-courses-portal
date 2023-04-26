import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isLoaded: boolean;
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.use('ru');
  }
}

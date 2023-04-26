import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.scss'],
})
export class SelectLangComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}

  public changeCurrLang(event) {
    const currLang: string = event.target.value;

    localStorage.setItem('currLang', currLang);
    this.translateService.use(currLang);
  }
}

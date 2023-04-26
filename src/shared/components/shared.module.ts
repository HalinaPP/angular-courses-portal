import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActionButtonComponent } from './action-button/action-button.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [ActionButtonComponent, BreadcrumbsComponent],
  imports: [CommonModule, TranslateModule],
  exports: [ActionButtonComponent, BreadcrumbsComponent],
})
export class SharedComponentsModule {}

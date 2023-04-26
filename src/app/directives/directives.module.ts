import { TimeStatusDirective } from './item-time-status.directive';
import { IfAuthenticatedDirective } from './ifAuthenticated/if-authenticated.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [IfAuthenticatedDirective, TimeStatusDirective],
  imports: [CommonModule],
  exports: [IfAuthenticatedDirective, TimeStatusDirective],
})
export class CustomDirectivessModule {}

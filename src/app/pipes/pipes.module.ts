import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';
import { DurationPipe } from './duration.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DurationPipe, OrderByPipe],
  imports: [CommonModule],

  exports: [DurationPipe, OrderByPipe],
  providers: [FilterPipe],
})
export class CustomPipesModule {}

import { Course } from '../models/course';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  public transform(items: Course[], searchValue: string): Course[] {

    return searchValue ? items.filter((item: Course) =>
      item.name.includes(searchValue)
    ) : items;
  }
}

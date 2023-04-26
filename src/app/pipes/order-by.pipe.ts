import { Course } from '../models/course';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  public transform(items: Course[], direction?: string): Course[] {

    return items.sort((a: Course, b: Course) => {
      let el1 = Object.create(a);
      let el2 = Object.create(b);

      if (direction === 'DESC') {
        el1 = Object.create(b);
        el2 = Object.create(a);
      }

      if (el1.creationDate > el2.creationDate) {
        return 1;
      }
      if (el1.creationDate < el2.creationDate) {
        return -1;
      }

      return 0;
    })
  }
}

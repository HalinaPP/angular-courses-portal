import { Component, Input } from '@angular/core';
import { Course } from '../../../app/models/course';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input() currCourse: Course;
}

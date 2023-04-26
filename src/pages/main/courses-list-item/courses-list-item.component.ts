import { Course } from '../../../app/models/course';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListItemComponent {
  public editBtnName = "Edit";
  public deleteBtnName = "Delete";

  @Input()
  public item: Course;

  @Output() delete = new EventEmitter();

  public deleteItem (id:string):void{
    if(confirm("Do you really want to delete this course?")) {
      this.delete.emit(id);
    }
  }
}

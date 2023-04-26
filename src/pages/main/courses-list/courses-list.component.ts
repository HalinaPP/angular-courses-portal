import { CourseService } from '../../../app/services/courses.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Course } from '../../../app/models/course';
import { LoadingService } from '../../../app/services/loading.service';
import { selectCourses } from '../../../app/store/selectors/courses.selectors';
import {
  LoadCourses,
  LoadMoreCourses,
  DeleteCourse,
} from '../../../app/store/actions/courses.actions';
import { Observable } from 'rxjs';
import { IAppState } from '../../../app/store/state/app.state';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [CourseService],
})
export class CoursesListComponent implements OnInit, OnChanges {
  @Input() searchValue: string;

  public items: Course[] = [];
  public selectedId: number;
  private start = 0;
  public courses$: Observable<Course[]>;

  constructor(
    private loader: LoadingService,
    private store: Store<IAppState>
  ) {}

  public getCourses() {
    this.store.select(selectCourses).subscribe((courses) => {
      this.items = [...courses];
      setTimeout(() => {
        this.loader.set(false);
      }, 500);
    });
  }

  public loadCourses(textFragment?: string): void {
    const { start } = this;
    this.store.dispatch(new LoadCourses({ start, textFragment }));
  }

  public deleteCourse(id: string): void {
    this.store.dispatch(new DeleteCourse(id));
  }

  public loadMore(): void {
    this.start += 3;
    this.store.dispatch(
      new LoadMoreCourses({ start: this.start, textFragment: this.searchValue })
    );
  }

  ngOnInit(): void {
    this.getCourses();
  }

  ngOnChanges() {
    this.loadCourses(this.searchValue);
    this.getCourses();
  }
}

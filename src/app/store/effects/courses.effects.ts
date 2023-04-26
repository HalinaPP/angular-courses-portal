import { selectCurrPage } from './../selectors/courses.selectors';
import { IAppState } from './../state/app.state';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { CourseService } from '../../services/courses.service';
import { LoadingService } from '../../services/loading.service';
import {
  ECoursesActions,
  LoadCourses,
  SetCourses,
  LoadCoursesFailed,
  DeleteCourse,
  LoadMoreCourses,
  SetMoreCourses,
  SetCurrCourse,
  CreateCourse,
  LoadCourseById,
  UpdateCourse,
  SetAuthors,
  GetAuthors,
  FetchAuthors,
} from '../actions/courses.actions';
import { Author, Course } from '../../models/course';
import { Store } from '@ngrx/store';

@Injectable()
export class CourseEffects {
  course$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ECoursesActions.LoadCourses),
      switchMap((action: LoadCourses) => {
        const { start, textFragment } = action.payload;
        return this.courseService.getList(start, textFragment).pipe(
          map((courses: Course[]) => {
            this.loader.set(false);
            return new SetCourses(courses);
          }),
          catchError((error: HttpErrorResponse) => of(new LoadCoursesFailed()))
        );
      })
    );
  });

  moreCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ECoursesActions.LoadMoreCourses),
      switchMap((action: LoadMoreCourses) => {
        this.loader.set(false);
        const { start, textFragment } = action.payload;
        return this.courseService.getList(start, textFragment);
      }),
      switchMap((newCourses: Course[]) => {
        return of(new SetMoreCourses(newCourses));
      }),
      catchError((error: HttpErrorResponse) => of(new LoadCoursesFailed()))
    );
  });

  deleteCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ECoursesActions.DeleteCourse),
      switchMap((action: DeleteCourse) =>
        of(this.courseService.removeItem(action.payload))
      ),
      switchMap(() => this.store.select(selectCurrPage)),
      switchMap((currPage) => {
        return of(new LoadCourses({ start: currPage, textFragment: '' }));
      }),
      catchError((error: HttpErrorResponse) => of(new LoadCoursesFailed()))
    );
  });

  createCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ECoursesActions.CreateCourse),
      switchMap((action: CreateCourse) => {
        this.loader.set(false);
        return this.courseService.createCourse(action.payload);
      }),
      switchMap(() => this.store.select(selectCurrPage)),
      switchMap((currPage) => {
        return of(new LoadCourses({ start: currPage, textFragment: '' }));
      }),
      catchError((error: HttpErrorResponse) => of(new LoadCoursesFailed()))
    );
  });

  updatedCourse = createEffect(() => {
    return this.actions$.pipe(
      ofType(ECoursesActions.UpdateCourse),
      switchMap((action: UpdateCourse) => {
        this.loader.set(false);
        return this.courseService.updateCourse(action.payload);
      }),
      switchMap(() => this.store.select(selectCurrPage)),
      switchMap((currPage) => {
        return of(new LoadCourses({ start: currPage, textFragment: '' }));
      }),
      catchError((error: HttpErrorResponse) => of(new LoadCoursesFailed()))
    );
  });

  loadCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ECoursesActions.LoadCourseById),
      switchMap((action: LoadCourseById) => {
        return this.courseService.getItemById(action.payload).pipe(
          map((course: Course) => {
            this.loader.set(false);
            return new SetCurrCourse(course);
          })
        );
      }),
      catchError((error: HttpErrorResponse) => of(new LoadCoursesFailed()))
    );
  });

  authors$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ECoursesActions.GetAuthors),
      switchMap((action: GetAuthors) => {
        return this.courseService.getAuthors(action.payload).pipe(
          map((authors: Author[]) => {
            this.loader.set(false);
            return new SetAuthors(authors);
          })
        );
      }),
      catchError((error: HttpErrorResponse) => of(new LoadCoursesFailed()))
    );
  });

  fetchAutors = createEffect(() => {
    return this.actions$.pipe(
      ofType(ECoursesActions.FetchAuthors),
      switchMap((action: FetchAuthors) => {
        const { textFragment } = action.payload;
        return this.courseService.getAuthors(textFragment).pipe(
          map((authors: Author[]) => {
            this.loader.set(false);
            return new SetAuthors(authors);
          }),
          catchError((error: HttpErrorResponse) => of(new LoadCoursesFailed()))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private loader: LoadingService,
    private store: Store<IAppState>
  ) {}
}

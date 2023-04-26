import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICoursesState } from '../state/courses.state';

const selectCoursesInfo = (state: IAppState) => state.courses;

export const selectCourses = createSelector(
  selectCoursesInfo,
  (courses: ICoursesState) => courses.coursesList
);

export const selectCurrPage = createSelector(
  selectCoursesInfo,
  (courses: ICoursesState) => courses.currPage
);

export const selectCurrCourse = createSelector(
  selectCoursesInfo,
  (courses: ICoursesState) => courses.currCourse
);

export const selectAuthors = createSelector(
  selectCoursesInfo,
  (courses: ICoursesState) => courses.allAuthors
);


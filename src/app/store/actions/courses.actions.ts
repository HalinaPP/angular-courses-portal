import { Action } from '@ngrx/store';
import { Author, Course } from '../../models/course';

export enum ECoursesActions {
  LoadCourses = '[Courses] Load Courses',
  LoadMoreCourses = '[Courses] Load More Courses',
  LoadCoursesFailed = '[Courses] Load Courses Failed',
  SetCourses = '[Courses] Set Courses',
  SetMoreCourses = '[Courses] Set More Courses',
  SetCurrPage = '[Courses] Set Current Page',
  LoadCourseById = '[Course] Load Course By Id',
  GetCourseById = '[Course] Get Course By Id',
  SetCurrCourse = '[Course] Set Current Course',
  CreateCourse = '[Course] Create Course',
  UpdateCourse = '[Course] Update Course',
  DeleteCourse = '[Courses] Delete Course',
  GetAuthors = '[Courses] Get Authors',
  SetAuthors = '[Course] Set Authors',
  FetchAuthors = '[Course] Fetch Authors'
}

export class LoadCourseById implements Action {
  public readonly type = ECoursesActions.LoadCourseById;
  constructor(public payload: string) {}
}
export class LoadCourses implements Action {
  public readonly type = ECoursesActions.LoadCourses;
  constructor(public payload: { start: number; textFragment: string }) {}
}

export class LoadMoreCourses implements Action {
  public readonly type = ECoursesActions.LoadMoreCourses;
  constructor(public payload: { start: number; textFragment: string }) {}
}

export class LoadCoursesFailed implements Action {
  public readonly type = ECoursesActions.LoadCoursesFailed;
}

export class SetCourses implements Action {
  public readonly type = ECoursesActions.SetCourses;
  constructor(public payload: Course[]) {}
}

export class SetMoreCourses implements Action {
  public readonly type = ECoursesActions.SetMoreCourses;
  constructor(public payload: Course[]) {}
}

export class SetCurrPage implements Action {
  public readonly type = ECoursesActions.SetCurrPage;
  constructor(public payload: number) {}
}

export class SetCurrCourse implements Action {
  public readonly type = ECoursesActions.SetCurrCourse;
  constructor(public payload: Course) {}
}

export class GetCourseById implements Action {
  public readonly type = ECoursesActions.GetCourseById;
  constructor(public payload: string) {}
}

export class CreateCourse implements Action {
  public readonly type = ECoursesActions.CreateCourse;
  constructor(public payload: Course) {}
}

export class UpdateCourse implements Action {
  public readonly type = ECoursesActions.UpdateCourse;
  constructor(public payload: Course) {}
}

export class DeleteCourse implements Action {
  public readonly type = ECoursesActions.DeleteCourse;
  constructor(public payload: string) {}
}

export class GetAuthors implements Action {
  public readonly type = ECoursesActions.GetAuthors;
  constructor(public payload:string) {}
}

export class SetAuthors implements Action {
  public readonly type = ECoursesActions.SetAuthors;
  constructor(public payload: Author[]) {}
}

export class FetchAuthors implements Action {
  readonly type = ECoursesActions.FetchAuthors;
  constructor(public payload: {textFragment: string}) { }
}


export type CoursesActions =
  | SetCurrCourse
  | SetCourses
  | SetMoreCourses
  | SetCurrPage
  | LoadCourseById
  | LoadCourses
  | LoadMoreCourses
  | CreateCourse
  | UpdateCourse
  | DeleteCourse
  | LoadCoursesFailed
  | SetAuthors
  | FetchAuthors
  | GetAuthors;

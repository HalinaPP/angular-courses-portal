import { Author, Course } from '../../models/course';

export interface ICoursesState {
  coursesList: Course[];
  currPage: number;
  currCourse: Course;
  allAuthors: Author[];
}

export const initialCoursesState: ICoursesState = {
  coursesList: [],
  currPage: 0,
  currCourse: undefined,
  allAuthors:[]
}

import { ICoursesState, initialCoursesState } from '../state/courses.state';
import { CoursesActions, ECoursesActions } from '../actions/courses.actions';

export const coursesReducers = (state = initialCoursesState, action: CoursesActions): ICoursesState => {
  switch (action.type) {

    case ECoursesActions.SetCurrCourse:
      return {
        ...state,
        currCourse: action.payload
      };
    case ECoursesActions.SetCourses:
      return {
        ...state,
        coursesList: action.payload
      };
    case ECoursesActions.SetCurrPage:
         return {
           ...state,
           currPage: action.payload
         };
    case ECoursesActions.SetMoreCourses:
      return {
        ...state,
        coursesList: [...state.coursesList, ...action.payload]
      };
    case ECoursesActions.SetAuthors:
      return {
        ...state,
        allAuthors: [...action.payload]
      }
    default:
      return state;
  }
}

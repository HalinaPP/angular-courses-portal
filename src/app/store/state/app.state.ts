import { RouterReducerState } from '@ngrx/router-store';
import { IAuthState, initialAuthState } from './auth.state';
import { ICoursesState, initialCoursesState } from './courses.state';

export interface IAppState {
  router?: RouterReducerState;
  auth: IAuthState;
  courses: ICoursesState;
};

export const initialAppState: IAppState = {
  auth: initialAuthState,
  courses: initialCoursesState,
};

export const getInitialState = (): IAppState => {
  return initialAppState;
}

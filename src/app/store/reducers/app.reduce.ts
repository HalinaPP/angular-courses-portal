import { IAppState } from '../state/app.state';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { authReducers } from './auth.reduce';
import { coursesReducers } from './courses.reduce';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  auth: authReducers,
  courses: coursesReducers,
};

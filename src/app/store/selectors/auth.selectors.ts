import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IAuthState } from '../state/auth.state';

const selectAuthInfo = (state: IAppState) => state.auth;

export const selectToken = createSelector(
  selectAuthInfo,
  (state: IAuthState) => state.token
);

export const selectUser = createSelector(
  selectAuthInfo,
  (state: IAuthState) => state.user
);

export const selectUserName = createSelector(
  selectAuthInfo,
  (state: IAuthState) => {
    const {first, last} = state.user.name;
    return `${first} ${last}`;
  }
);

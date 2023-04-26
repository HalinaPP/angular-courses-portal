import { Action } from '@ngrx/store';
import { UserI } from '../../models/user';

export enum EAuthActions {
  GetUser = '[Auth] Get User',
  SetUser = '[Auth] Set User',
  SetToken = '[Auth] Set Token',
  LogoutUser = '[Auth] Logout User'
}

export class GetUser implements Action {
  public readonly type = EAuthActions.GetUser;
}

export class SetUser implements Action {
  public readonly type = EAuthActions.SetUser;
  constructor(public payload: UserI) { }
}

export class SetToken implements Action {
  public readonly type = EAuthActions.SetToken;
  constructor(public payload: string) { }
}

export class LogoutUser implements Action {
  public readonly type = EAuthActions.LogoutUser;
  constructor(public payload: string) { }
}

export type AuthActions = GetUser | SetToken | SetUser | LogoutUser;

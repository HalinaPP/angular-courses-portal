import { UserI } from './../../models/user';

export interface IAuthState {
  user: UserI;
  token: string;
}

export const initialAuthState: IAuthState = {
  user: undefined,
  token: undefined
}

import { IAuthState, initialAuthState } from '../state/auth.state';
import { AuthActions, EAuthActions} from '../actions/auth.actions';

export const authReducers = (state = initialAuthState, action: AuthActions): IAuthState => {
  switch (action.type) {
    case EAuthActions.SetToken:
      return {
        ...state,
        token: action.payload
      };
    case EAuthActions.SetUser:
      return {
        ...state,
        user: action.payload
      };
    case EAuthActions.LogoutUser:
      return {
        ...state,
        user: undefined,
        token: undefined,
      };
    default:
      return state;
  }
}

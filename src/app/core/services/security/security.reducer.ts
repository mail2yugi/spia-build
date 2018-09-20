import { User } from './user.model';
import { AnyAction, LoginSuccess, securityActions } from './security.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const securityFeatureName: string = 'security';

export interface SecurityState {
  currentUser: User | null;
  token: string;
}

export const initialState: SecurityState = {
  currentUser: null,
  token: ''
};

export function reducer(state = initialState, action: AnyAction): SecurityState {
  switch (action.type) {
    case securityActions.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: (<LoginSuccess>action).payload.currentUser,
        token: (<LoginSuccess>action).payload.token,
      };

    case securityActions.TRY_LOGIN_FAILED:
      return {
        ...state,
        currentUser: null
      };

    default:
      return state;
    }
}

export const getCurrentUser = (state: SecurityState) => state.currentUser;
export const getToken = (state: SecurityState) => state.token;

const securityStateSelector = createFeatureSelector<SecurityState>(securityFeatureName);
export const currentUserSelector = createSelector(securityStateSelector, getCurrentUser);
export const tokenSelector = createSelector(securityStateSelector, getToken);

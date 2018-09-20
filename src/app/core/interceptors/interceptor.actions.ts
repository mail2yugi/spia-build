import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const interceptorActions = {
  AUTH_FAILED: '[Interceptor] Authentication Failed',
  HTTP_ERROR: '[Interceptor] Http Error'
};

export class AuthFailed implements Action {
  readonly type = interceptorActions.AUTH_FAILED;
}

export class HttpError implements Action {
  readonly type = interceptorActions.HTTP_ERROR;

  constructor(public payload: HttpErrorResponse) {}
}

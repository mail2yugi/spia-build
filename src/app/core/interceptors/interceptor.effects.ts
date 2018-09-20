import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { interceptorActions, HttpError } from './interceptor.actions';
import { SendNotification } from '../services/notification/notification.actions';
import { NotificationType } from '../services/notification/notification.reducer';
import { SecurityService } from '../services/security/security.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class InterceptorEffects {

  @Effect({dispatch: false})
  authInterceptorError$ = this.actions$
    .ofType(interceptorActions.AUTH_FAILED)
    .do(() => this.securityService.redirectToHomePage());

  @Effect()
  httpInterceptorError$ = this.actions$
    .ofType(interceptorActions.HTTP_ERROR)
    .map((action: HttpError) => action.payload)
    .map(error => new SendNotification({
      message: error.message,
      title: `${error.status} - ${error.statusText}`,
      notificationType: NotificationType.ERROR
    }));

  constructor(private actions$: Actions,
              private securityService: SecurityService) {
  }
}

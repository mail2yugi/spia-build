import { async, TestBed } from '@angular/core/testing';
import { HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { mockService } from '../../../tests/mocked-services';
import { SecurityService } from '../services/security/security.service';
import { InterceptorEffects } from './interceptor.effects';
import { NotificationType } from '../services/notification/notification.reducer';
import { AuthFailed, HttpError } from './interceptor.actions';

describe('AuthInterceptorEffects', () => {

  let effects: InterceptorEffects,
      actions: ReplaySubject<AuthFailed | HttpError>,
      securityService: jasmine.SpyObj<SecurityService>;

  const testError: HttpErrorResponse = {
    headers: new HttpHeaders(),
    type: HttpEventType.Response,
    status: 401,
    statusText: 'Notification status',
    url: '',
    ok: false,
    name: '',
    message: 'Notification message',
    error: null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        InterceptorEffects,
        provideMockActions(() => actions),
        {provide: SecurityService, useValue: mockService(SecurityService)}
      ]
    });

    effects = TestBed.get(InterceptorEffects);
    securityService = TestBed.get(SecurityService);
  }));

  it('should catch and dispatch AuthError', async(() => {
    actions = new ReplaySubject(1);
    actions.next(new AuthFailed());
    effects.authInterceptorError$.subscribe(() => {
      expect(securityService.redirectToHomePage).toHaveBeenCalled();
    });
  }));

  it('should catch and notify HttpError', async(() => {
    actions = new ReplaySubject(1);
    actions.next(new HttpError(testError));
    effects.httpInterceptorError$.subscribe(result => {
      expect(result.notification.notificationType).toEqual(NotificationType.ERROR);
    });
  }));

});

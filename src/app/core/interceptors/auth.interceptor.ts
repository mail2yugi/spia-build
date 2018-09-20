import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthFailed} from './interceptor.actions';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
// import { AppState } from '../../app.reducer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(/*private store: Store<AppState>*/) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).catch(errorResponse => {
      if (errorResponse instanceof HttpErrorResponse && errorResponse.status === 401) {
        // this.store.dispatch(new AuthFailed());
      }
      return Observable.throw(errorResponse);
    });
  }
}

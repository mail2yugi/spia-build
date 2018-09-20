import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HttpError } from './interceptor.actions';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import { AppState } from '../../app.reducer';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(/*private store: Store<AppState>*/) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).catch(errorResponse => {
      if (errorResponse instanceof HttpErrorResponse) {
       // this.store.dispatch(new HttpError(errorResponse));
      }
      return Observable.throw(errorResponse);
    });
  }
}

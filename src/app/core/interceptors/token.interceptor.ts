import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { SecurityState, tokenSelector } from '../services/security/security.reducer';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<SecurityState>) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return Observable.race(
      this.store.select(tokenSelector)
      .filter(token => !!token)
      .switchMap(token => next.handle(request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      }))),
      next.handle(request)
    );
  }
}

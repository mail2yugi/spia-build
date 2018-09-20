import {BehaviorSubject} from 'rxjs/BehaviorSubject';
/*import { OAuthService } from 'angular-oauth2-oidc';*/
import {Observable} from 'rxjs/Observable';
/*import { Store } from '@ngrx/store';*/
import {Data, PRIMARY_OUTLET} from '@angular/router';
import {Subject} from 'rxjs/Subject';

export function mockService(serviceClass: any): any {
  const props = Object.getOwnPropertyNames(serviceClass.prototype).slice(1);
  return jasmine.createSpyObj(props);
}

export function mockConfig(configClass: any): any {
  const props = [
    ...Object.getOwnPropertyNames(configClass.prototype).slice(1),
    ...Object.getOwnPropertyNames(new configClass())
  ];
  return jasmine.createSpyObj(props);
}

export class MockOAuthService {
  public events: Observable<any>;

  constructor() {
    /*Object.assign(this, mockService(OAuthService), {
      events: Observable.of({})
    });*/
    spyOn(this.events, 'subscribe');
  }
}

export class MockStore<T> {
  public select: jasmine.Spy;
  public dispatch: jasmine.Spy;

  constructor() {
    /* Object.assign(this, mockService(Store));*/
    this.select.and.returnValue(new BehaviorSubject<any>({}));
  }
}

export class MockedActivatedRoute {
  public outlet = PRIMARY_OUTLET;
  public routeConfig;
  public snapshot;
  public firstChild;

  constructor(public path: string, data?: Data) {
    if (data) {
      this.routeConfig = {data};
    }
    this.snapshot = {
      url: [{path}]
    };
  }
}

export class MockRouter {
  public events: Subject<any>;

  constructor() {
    this.events = new Subject<any>();
  }
}

import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ToastrModule} from 'ngx-toastr';

// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslationService} from './services/translation/translation.service';
import {TokenService} from './services/security/token.service';
import {UserService} from './services/security/user.service';
import {SecurityService} from './services/security/security.service';
import {HttpService} from './services/http/http.service';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor';
import {LocalStorageService} from './services/local-storage/local-storage.service';
import {NotificationService} from './services/notification/notification.service';
import { Store, StoreModule } from '@ngrx/store';
import { reducer, securityFeatureName } from './services/security/security.reducer';
import { notificationReducer, notificationsFeatureName } from './services/notification/notification.reducer';
import {Actions, EffectsModule} from '@ngrx/effects';
import { SecurityEffects } from './services/security/security.effects';
import {InterceptorEffects} from './interceptors/interceptor.effects';
import {NotificationEffects} from './services/notification/notification.effects';
import {OAuthService, UrlHelperService} from 'angular-oauth2-oidc';
import {EffectsRootModule} from '@ngrx/effects/src/effects_root_module';


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const components = [];

const modules = [
  HttpModule,
  HttpClientModule,
  RouterModule,
  BrowserAnimationsModule,
  SharedModule,
  ToastrModule.forRoot({
    positionClass: 'toast-bottom-center',
    closeButton: true,
    progressBar: true,
    enableHtml: true
  }),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
  StoreModule.forRoot({}),
  EffectsModule.forRoot([SecurityEffects]),
  StoreModule.forFeature(securityFeatureName, reducer),
  BrowserAnimationsModule,
  StoreModule.forFeature(notificationsFeatureName, notificationReducer),
  EffectsModule.forFeature([SecurityEffects, InterceptorEffects, NotificationEffects]),
];

const providers = [
  TokenService,
  UserService,
  SecurityService,
  TranslationService,
  LocalStorageService,
  NotificationService,
  HttpService,
  OAuthService,
  UrlHelperService,
  {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
];

const exported = [
  ...components,
  TranslateModule
];

@NgModule({
  imports: modules,
  declarations: components,
  exports: exported
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers
    };
  }
}

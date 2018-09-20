import { environment } from '../../../../environments/environment';
import {AuthConfig} from 'angular-oauth2-oidc';

export const oauthConfig: AuthConfig = {
  clientId: environment.oauth.clientId,
  issuer: environment.oauth.url,
  loginUrl: `${environment.oauth.url}/as/authorization.oauth2`,
  logoutUrl: `${environment.oauth.url}/idp/startSLO.ping?TargetResource=${encodeURIComponent(environment.host)}`,
  redirectUri: `${environment.host}/finish.html`,
  customQueryParams: {
    display: 'page'
  }
};

import { async, inject, TestBed } from '@angular/core/testing';
import { OAuthService } from 'angular-oauth2-oidc';
import { MockOAuthService } from '../../../../tests/mocked-services';
import { UserService } from './user.service';
import { User } from './user.model';

describe('UserService', () => {

  let oAuthService: OAuthService;
  const testToken: string = 'Test Token',
        testUser: User = {
          city: '',
          client_id: '',
          email: '',
          exp: 0,
          firstName: '',
          lastName: '',
          memberOf: '',
          scope: [],
          userName: '',
          username: '',
          country: ''
        };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        {provide: OAuthService, useClass: MockOAuthService}
      ]
    });

    oAuthService = TestBed.get(OAuthService);

    (<jasmine.Spy>oAuthService.getAccessToken).and.returnValue(testToken);
    (<jasmine.Spy>oAuthService.hasValidAccessToken).and.returnValue(true);
    (<jasmine.Spy>oAuthService.getIdentityClaims).and.returnValue(testUser);
  }));

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should return access token', inject([UserService], (service: UserService) => {
    const isAuthenticated = service.isAuthenticated();
    expect(oAuthService.hasValidAccessToken).toHaveBeenCalled();
    expect(isAuthenticated).toEqual(true);
  }));

  it('should return User identity', inject([UserService], (service: UserService) => {
    const user = service.getCurrentUser();
    expect(oAuthService.getIdentityClaims).toHaveBeenCalled();
    expect(user).toEqual(testUser);
  }));

});

import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { mockService, MockStore } from '../../../../tests/mocked-services';
import { NotificationEffects } from './notification.effects';
import {
  Actions,
  HideNotification, HideNotificationSuccess, SendNotification,
  SendNotificationSuccess
} from './notification.actions';
import { NotificationType } from './notification.reducer';
import { Notification } from './notification.model';
import { NotificationService } from './notification.service';
import { Store } from '@ngrx/store';

describe('NotificationEffects', () => {

  let effects: NotificationEffects,
      actions: ReplaySubject<Actions>,
      notificationService: NotificationService;

  const notification: Notification = {
    message: 'SUCCESS',
    notificationType: NotificationType.SUCCESS
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotificationEffects,
        provideMockActions(() => actions),
        {provide: NotificationService, useValue: mockService(NotificationService)},
        {provide: Store, useClass: MockStore}
      ]
    });

    notificationService = TestBed.get(NotificationService);
    effects = TestBed.get(NotificationEffects);
  });

  it('should catch SendNotification, trigger toastr, filter notification and dispatch SendNotificationSuccess', async(() => {
    (<jasmine.Spy>notificationService.sendSuccess).and.returnValue(notification);
    actions = new ReplaySubject(1);
    actions.next(new SendNotification(notification));
    effects.sendNotification$.subscribe(result => {
      expect(notificationService.sendSuccess).toHaveBeenCalledWith(notification);
      expect(result).toEqual(new SendNotificationSuccess(notification));
    });
  }));

  it('should catch SendNotification, trigger toastr and filter notification', async(() => {
    (<jasmine.Spy>notificationService.sendSuccess).and.returnValue(null);
    actions = new ReplaySubject(1);
    actions.next(new SendNotification(notification));
    effects.sendNotification$.subscribe(result => {
      expect(notificationService.sendSuccess).toHaveBeenCalledWith(notification);
      expect(result).toEqual(null);
    });
  }));

  it('should catch HideNotification filter and dispatch HideNotificationSuccess', async(() => {
    const store = TestBed.get(Store);
    store.select().next([notification]);

    actions = new ReplaySubject(1);
    actions.next(new HideNotification(notification));
    effects.hideNotification$.subscribe(result => {
      expect(result).toEqual(new HideNotificationSuccess([]));
    });
  }));

});

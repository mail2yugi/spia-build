import { async } from '@angular/core/testing';
import { Notification } from './notification.model';
import { getNotifications, initialState, notificationReducer, NotificationType } from './notification.reducer';
import {
  SendNotificationSuccess, SendNotification,
  HideNotificationSuccess
} from './notification.actions';

describe('NotificationReducer', () => {

  const notification: Notification = {
    message: 'SUCCESS',
    notificationType: NotificationType.SUCCESS
  };

  it('should return state with new notification added on SendNotificationSuccess', async(() => {
    const state = notificationReducer(initialState, new SendNotificationSuccess(notification));
    expect(state.notifications).toEqual([notification]);
  }));

  it('should update notifications on HideNotificationSuccess', async(() => {
    const state = notificationReducer({notifications: [notification]}, new HideNotificationSuccess([]));
    expect(state.notifications).toEqual([]);
  }));

  it('should return state with no notification', async(() => {
    const state = notificationReducer(initialState, new SendNotification(notification));
    expect(state.notifications).toEqual(initialState.notifications);
  }));

  describe('getter methods', () => {
    it('should get notifications', () => {
      expect(getNotifications(initialState)).toBe(initialState.notifications);
    });
  });
});

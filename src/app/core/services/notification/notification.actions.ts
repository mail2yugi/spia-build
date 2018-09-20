import { Action } from '@ngrx/store';
import { Notification } from './notification.model';
import { notificationsFeatureName } from './notification.reducer';

export const notificationActions = {
  SEND_NOTIFICATION: `[${notificationsFeatureName}] Send`,
  SEND_NOTIFICATION_SUCCESS: `[${notificationsFeatureName}] Send success`,
  HIDE_NOTIFICATION: `[${notificationsFeatureName}] Hide`,
  HIDE_NOTIFICATION_SUCCESS: `[${notificationsFeatureName}] Hide success`
};

export class SendNotification implements Action {
  readonly type = notificationActions.SEND_NOTIFICATION;

  constructor(public notification: Notification) {
  }
}

export class SendNotificationSuccess implements Action {
  readonly type = notificationActions.SEND_NOTIFICATION_SUCCESS;

  constructor(public notification: Notification) {
  }
}

export class HideNotification implements Action {
  readonly type = notificationActions.HIDE_NOTIFICATION;

  constructor(public notification: Notification) {
  }
}

export class HideNotificationSuccess implements Action {
  readonly type = notificationActions.HIDE_NOTIFICATION_SUCCESS;

  constructor(public notifications: Notification[]) {
  }
}

export type Actions = SendNotification | SendNotificationSuccess | HideNotification | HideNotificationSuccess;

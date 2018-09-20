import { Notification } from './notification.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Actions, HideNotificationSuccess, notificationActions, SendNotificationSuccess } from './notification.actions';

export const notificationsFeatureName: string = 'notifications';

export enum NotificationType {
  SUCCESS = 'sendSuccess',
  INFO = 'sendInfo',
  WARNING = 'sendWarning',
  ERROR = 'sendError'
}

export interface NotificationState {
  notifications: Notification[];
}

export const initialState: NotificationState = {
  notifications: []
};

export function notificationReducer(state = initialState, action: Actions): NotificationState {
  switch (action.type) {
    case (notificationActions.SEND_NOTIFICATION_SUCCESS): {
      return {
        notifications: [...state.notifications, (<SendNotificationSuccess>action).notification]
      };
    }
    case (notificationActions.HIDE_NOTIFICATION_SUCCESS): {
      return {
        notifications: [...(<HideNotificationSuccess>action).notifications]
      };
    }
    default: {
      return state;
    }
  }
}

export const getNotifications = (state: NotificationState) => state.notifications;

export const notificationsStateSelector = createFeatureSelector<NotificationState>(notificationsFeatureName);
export const notificationsSelector = createSelector(notificationsStateSelector, getNotifications);

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { NotificationService } from './notification.service';
import { Action, Store } from '@ngrx/store';
import { notificationActions, HideNotification, HideNotificationSuccess, SendNotification, SendNotificationSuccess
} from './notification.actions';
import { notificationsSelector, NotificationState } from './notification.reducer';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class NotificationEffects {
  @Effect()
  sendNotification$ = this.actions$
    .ofType(notificationActions.SEND_NOTIFICATION)
    .map((action: SendNotification) => action.notification)
    .map(notification => this.notificationService[notification.notificationType](notification))
    .filter(notification => !!notification)
    .map(notification => new SendNotificationSuccess(notification));

  @Effect()
  hideNotification$ = this.actions$
    .ofType(notificationActions.HIDE_NOTIFICATION)
    .withLatestFrom(this.store.select(notificationsSelector))
    .map(([action, notifications]) => notifications.filter(notification => notification !== (<HideNotification>action).notification))
    .map(notifications => new HideNotificationSuccess(notifications));

  constructor(private actions$: Actions<Action>,
              private notificationService: NotificationService,
              private store: Store<NotificationState>) {
  }
}

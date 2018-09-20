import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { ActiveToast, ToastrService } from 'ngx-toastr';
import { Notification } from './notification.model';
import { HideNotification } from './notification.actions';
import { NotificationState } from './notification.reducer';
import { notificationConfig } from './notification.config';

@Injectable()
export class NotificationService {

  constructor(private store: Store<NotificationState>,
              private toastr: ToastrService) {
    Object.assign(toastr.toastrConfig, notificationConfig.toastr);
  }

  sendSuccess(notification: Notification): Notification | null {
    const toast: ActiveToast | null = this.toastr.success(this.limitToMaxLength(notification.message), notification.title);
    return toast && this.onHiddenHandler(toast, notification);
  }

  sendError(notification: Notification): Notification | null {
    const toast: ActiveToast | null = this.toastr.error(this.limitToMaxLength(notification.message), notification.title);
    return toast && this.onHiddenHandler(toast, notification);
  }

  sendInfo(notification: Notification): Notification | null {
    const toast: ActiveToast | null = this.toastr.info(this.limitToMaxLength(notification.message), notification.title);
    return toast && this.onHiddenHandler(toast, notification);
  }

  sendWarning(notification: Notification): Notification | null {
    const toast: ActiveToast | null = this.toastr.warning(this.limitToMaxLength(notification.message), notification.title);
    return toast && this.onHiddenHandler(toast, notification);
  }

  private limitToMaxLength(message: string): string {
    return (message.length < notificationConfig.maxLength) ? message : message.substring(0, notificationConfig.maxLength).concat('...');
  }

  private onHiddenHandler(toast: ActiveToast | null, notification: Notification): Notification | null {
    toast.onHidden.subscribe(() => {
      this.store.dispatch(new HideNotification(notification));
    });
    return notification;
  }
}

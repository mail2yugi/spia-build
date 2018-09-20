import { inject, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ActiveToast, ToastRef, ToastrService } from 'ngx-toastr';
import { mockConfig, MockStore } from '../../../../tests/mocked-services';
import { NotificationService } from './notification.service';
import { NotificationState, NotificationType } from './notification.reducer';
import { Notification } from './notification.model';
import { HideNotification } from './notification.actions';
import { notificationConfig } from './notification.config';

describe('NotificationService', () => {

  let store: Store<NotificationState>,
      toastr: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotificationService,
        {provide: ToastrService, useValue: mockConfig(ToastrService)},
        {provide: Store, useClass: MockStore}
      ]
    });

    toastr = TestBed.get(ToastrService);
    store = TestBed.get(Store);
  });

  it('should be created', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a public API', inject([NotificationService], (service: NotificationService) => {
    expect(service.sendSuccess).toBeDefined();
    expect(service.sendError).toBeDefined();
    expect(service.sendInfo).toBeDefined();
    expect(service.sendWarning).toBeDefined();
  }));

  it('should call success on toastr service', inject([NotificationService], (service: NotificationService) => {
    const notification: Notification = {
      message: 'SUCCESS',
      notificationType: NotificationType.SUCCESS
    };
    service.sendSuccess(notification);
    expect(toastr.success).toHaveBeenCalledWith(notification.message, notification.title);
  }));

  it('should call error on toastr service', inject([NotificationService], (service: NotificationService) => {
    const notification: Notification = {
      message: 'ERROR',
      notificationType: NotificationType.ERROR
    };
    service.sendError(notification);
    expect(toastr.error).toHaveBeenCalledWith(notification.message, notification.title);
  }));

  it('should call info on toastr service', inject([NotificationService], (service: NotificationService) => {
    const notification: Notification = {
      message: 'INFO',
      notificationType: NotificationType.INFO
    };
    service.sendInfo(notification);
    expect(toastr.info).toHaveBeenCalledWith(notification.message, notification.title);
  }));

  it('should call warning on toastr service', inject([NotificationService], (service: NotificationService) => {
    const notification: Notification = {
      message: 'WARNING',
      notificationType: NotificationType.WARNING
    };
    service.sendWarning(notification);
    expect(toastr.warning).toHaveBeenCalledWith(notification.message, notification.title);
  }));

  it('should return unmodified message', inject([NotificationService], (service: NotificationService) => {
    const shortMessage: string = 'test',
          message: string = service['limitToMaxLength'](shortMessage);
    expect(shortMessage).toEqual(message);
  }));

  it('should return modified message', inject([NotificationService], (service: NotificationService) => {
    let longMessage: string = ' ';
    longMessage = longMessage.repeat(notificationConfig.maxLength);
    const maxLengthLongMessage: number = notificationConfig.maxLength + 3,
          message: string = service['limitToMaxLength'](longMessage),
          indexOfDots: number = message.lastIndexOf('...');
    expect(message.length).toEqual(maxLengthLongMessage);
    expect(indexOfDots).toEqual(notificationConfig.maxLength);
  }));

  it('should subscribe, dispatch action and return notification', inject([NotificationService], (service: NotificationService) => {
    const notification: Notification = {
      message: 'SUCCESS',
      notificationType: NotificationType.SUCCESS
    };
    const toast: ActiveToast = {
            toastRef: new ToastRef(null),
            message: notification.message,
            onHidden: Observable.of(null)
          },
          objectReturned: Notification | null = service['onHiddenHandler'](toast, notification);
    expect(objectReturned).toEqual(notification);
    toast.onHidden.subscribe(() => {
      expect(store.dispatch).toHaveBeenCalledWith(new HideNotification(notification));
    });
  }));

});

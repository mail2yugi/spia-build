import {
  Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spia-modal',
  templateUrl: './modal-component.html',
  styleUrls: ['./modal-component.scss']
})
export class ModalComponent {
  @Input() title: string;
  @Input() actionButtonLabel: string;
  @Input() cancelButtonLabel: string;
  @Input() launchButtonLabel: string;
  @Input() data?: any;
  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  // Component Reference
  @ViewChild('content') modalTemplate: TemplateRef<Object>;
  // Directive Reference.
  @ContentChild('projectedTemplate') projectedTemplate: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  open(content: TemplateRef<Object>): void {
    this.modalService.open(content)
      .result.then(
        closeResult => this.confirm.emit(closeResult),
        () => this.cancel.emit()
    );
  }
}

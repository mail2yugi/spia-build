import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from '../core/components/header/header.component';
import {SidebarComponent} from '../core/components/sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {LocalStorageService} from '../core/services/local-storage/local-storage.service';
import {ModalComponent} from './components/modal/modal-component';

const modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  TranslateModule.forChild()
];

const components = [
  HeaderComponent,
  SidebarComponent,
  ModalComponent
];

const exported = [
  ...components,
  FormsModule,
  CommonModule,
  TranslateModule
];

const providers = [
  LocalStorageService
];

@NgModule({
  imports: modules,
  declarations: components,
  exports: exported,
  providers: providers,
  entryComponents:[ModalComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}

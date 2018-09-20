import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {D3Service} from 'd3-ng2-service';
import {TranslationService} from './core/services/translation/translation.service';

const modules = [
  BrowserModule,
  AppRoutingModule,
  CoreModule.forRoot(),
  NgbModule.forRoot()
];

const exports = [];

const providers = [
  D3Service // <-- import provider
];

@NgModule({
  imports: modules,
  declarations: [AppComponent],
  providers: providers,
  exports: exports,
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translationSvc: TranslationService) {
    translationSvc.registerFor('');
  }
}

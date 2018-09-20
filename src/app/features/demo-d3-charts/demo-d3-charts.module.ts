import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DemoD3ChartsRoutingModule} from './demo-d3-charts-routing.module';
import {DemoD3ChartsComponent} from './demo-d3-charts.component';
import {DemoD3ChartsService} from './demo-d3-charts.service';
import {SharedModule} from '../../shared/shared.module';
import {DialogComponent} from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DemoD3ChartsRoutingModule
  ],
  providers: [DemoD3ChartsService],
  declarations: [DemoD3ChartsComponent, DialogComponent],
  exports:[DialogComponent]
})
export class DemoD3ChartsModule {
}

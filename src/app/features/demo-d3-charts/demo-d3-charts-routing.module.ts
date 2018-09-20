import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DemoD3ChartsComponent} from './demo-d3-charts.component';

const routes: Routes = [
  {path: '', component: DemoD3ChartsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoD3ChartsRoutingModule {
}

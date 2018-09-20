import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FeaturesComponent} from './features.component';

const routes: Routes = [
  {
    path: '', component: FeaturesComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
      {path: 'dashboard', loadChildren: './demo-d3-charts/demo-d3-charts.module#DemoD3ChartsModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}

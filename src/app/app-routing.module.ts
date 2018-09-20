import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'spia', pathMatch: 'full'},
  {path: 'spia', loadChildren: './features/features.module#FeaturesModule'},
  {path: '**', redirectTo: 'spia', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

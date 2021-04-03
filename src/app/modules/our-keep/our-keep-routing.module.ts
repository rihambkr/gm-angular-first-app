import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OurKeepChlid2Component} from './our-keep-chlid2/our-keep-chlid2.component';
import {OurKeepChlidComponent} from './our-keep-chlid/our-keep-chlid.component';


const routes: Routes = [
  {path: 'child1', component: OurKeepChlidComponent},
  {path: 'child2', component: OurKeepChlid2Component},
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurKeepRoutingModule {
}

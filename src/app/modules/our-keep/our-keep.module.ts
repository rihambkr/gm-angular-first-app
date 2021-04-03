import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OurKeepRoutingModule} from './our-keep-routing.module';
import {OurKeepChlidComponent} from './our-keep-chlid/our-keep-chlid.component';
import {OurKeepComponent} from './our-keep.component';
import { OurKeepChlid2Component } from './our-keep-chlid2/our-keep-chlid2.component';


@NgModule({
  declarations: [
    OurKeepChlidComponent,
    OurKeepComponent,
    OurKeepChlid2Component
  ],
  imports: [
    CommonModule,
    OurKeepRoutingModule
  ]
})
export class OurKeepModule {
}

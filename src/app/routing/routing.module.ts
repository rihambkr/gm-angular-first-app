import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GoogleKeepComponent} from '../modules/google-keep/google-keep.component';
import {AddNoteComponent} from '../modules/google-keep/add-note/add-note.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'keeps',
    pathMatch: 'full'
  },
  {path: 'keeps', component: GoogleKeepComponent},
  {path: 'add-keep', component: AddNoteComponent},
  {path: '**', redirectTo: '/keeps'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class RoutingModule {
}

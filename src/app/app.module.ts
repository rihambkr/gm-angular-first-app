import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {GoogleKeepComponent} from './modules/google-keep/google-keep.component';
import {MatIconModule} from '@angular/material/icon';
import {CardKeepComponent} from './modules/google-keep/card-keep/card-keep.component';
import {AddNoteComponent} from './modules/google-keep/add-note/add-note.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RoutingModule} from './routing/routing.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    GoogleKeepComponent,
    CardKeepComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    RoutingModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

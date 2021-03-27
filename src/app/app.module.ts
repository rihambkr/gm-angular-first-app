import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {GoogleKeepComponent} from './modules/google-keep/google-keep.component';
import {MatIconModule} from '@angular/material/icon';
import { CardKeepComponent } from './modules/google-keep/card-keep/card-keep.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleKeepComponent,
    CardKeepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SearchbarComponent} from './searchbar/searchbar.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {DerectiveTestComponent} from './derective-test/derective-test.component';
import {MatButtonModule} from '@angular/material/button';
import { DefaultPipe } from './default.pipe';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './enfant/enfant.component';
import { DerictiveNewTestComponent } from './derictive-new-test/derictive-new-test.component';
import { PipetestPipe } from './pipetest.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    LoginComponent,
    DerectiveTestComponent,
    DefaultPipe,
    ParentComponent,
    EnfantComponent,
    DerictiveNewTestComponent,
    PipetestPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

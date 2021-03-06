import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'firstappangular';
  test: string;
  show = false;
  test2: string;

  @ViewChild(NavbarComponent) navbar;

  change = () => {
    this.show = !this.show;
  };

  recevoir = ($event) => {
    console.log('$event');
    console.log($event);
    this.test2 = $event;
  };

  ngAfterViewInit(): void {
    this.test = this.navbar.title;

  }
}

import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input()
  message: string;
  @Output() sageEvent = new EventEmitter();

  title = 'Find Jops';
  title2 = 'Find Jops 2';
  cpt: 2000;
  users: number[];
  desplay = false;

  constructor() {
    console.log('constructor');
    this.users = [2121, 3223, 232];
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.users = [2121, 3223, 232];
  }

  send = () => {
    this.sageEvent.emit(this.title2);
  };
  ourMethode = (a: string): void => {
    alert(a);
  };
  ngOnDestroy = () => {
    console.log('ngOnDestroy');
  };
}

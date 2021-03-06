import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Find Jops';
  cpt: 2000;

  constructor() {
  }

  ngOnInit(): void {

  }

  ourMethode = (a: string): void => {
    alert(a);
  };
}

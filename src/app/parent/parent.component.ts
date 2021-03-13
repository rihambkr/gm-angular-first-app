import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {EnfantComponent} from '../enfant/enfant.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(EnfantComponent) ch;
  message: string;
  message3: string;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.message = this.ch.message2;
  }

  recevoirMessage = ($event) => {
    this.message3 = $event;
  };
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {
  @Input()
  message: string;

  message2 = 'Hello from child';
  message3 = 'Hello 3 from child';

  @Output() eventMessage = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  send = () => {
    this.eventMessage.emit(this.message3);
  };

}

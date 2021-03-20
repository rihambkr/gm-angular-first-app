import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonService} from '../services/common.service';

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

  constructor(private  common: CommonService) {
  }

  ngOnInit(): void {
    this.common.subject.asObservable().subscribe((message: string) => {
      this.message = message;
    });
  }

  send = () => {
    this.eventMessage.emit(this.message3);
  };
  changeServiceMessage = () => {
    this.common.subject.next('New Service Message !');
  };

}

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
  tab = [];

  message2 = 'Hello from child';
  message3 = 'Hello 3 from child';

  @Output() eventMessage = new EventEmitter<string>();

  constructor(private  common: CommonService) {
    this.common.subject.asObservable().subscribe((message: string) => {
      this.message = message;
    });
  }

  ngOnInit(): void {
    this.common.bsubject.asObservable().subscribe(tab => {
      this.tab = tab;
    });
  }

  send = () => {
    this.eventMessage.emit(this.message3);
  };
  changeServiceMessage = () => {
    this.common.subject.next(this.message);
  };

  changeTab = () => {
    this.tab.shift();
    console.log(this.tab);
    this.common.bsubject.next(this.tab);
  };

}

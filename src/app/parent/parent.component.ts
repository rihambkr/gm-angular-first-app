import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {EnfantComponent} from '../enfant/enfant.component';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(EnfantComponent) ch;
  message: string;
  message3: string;
  tab = [];

  constructor(private common: CommonService) {
    this.common.subject.asObservable().subscribe((message: string) => {
      this.message = message;
    });
  }

  ngAfterViewInit(): void {
    this.common.bsubject.asObservable().subscribe(tab => {
      this.tab = tab;
    });
  }

  recevoirMessage = ($event) => {
    this.message3 = $event;
  };
}

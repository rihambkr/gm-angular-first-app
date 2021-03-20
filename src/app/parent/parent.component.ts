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

  constructor(private common: CommonService) {
  }

  ngAfterViewInit(): void {
    this.common.subject.asObservable().subscribe((message: string) => {
      this.message = message;
    });
  }

  recevoirMessage = ($event) => {
    this.message3 = $event;
  };
}

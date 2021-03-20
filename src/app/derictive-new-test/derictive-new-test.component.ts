import {Component, OnInit} from '@angular/core';
import Styles from '../styles/style';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-derictive-new-test',
  templateUrl: './derictive-new-test.component.html',
  styleUrls: ['./derictive-new-test.component.css']
})
export class DerictiveNewTestComponent implements OnInit {
  date = new Date();
  show = true;
  style = Styles;
  tab = [
    {
      name: 'user 1',
      email: 'email 1'
    },
    {
      name: 'user 2',
      email: 'email 2'
    },
    {
      name: 'user 3',
      email: 'email 3'
    },
  ];

  constructor(private common: CommonService) {
  }

  ngOnInit(): void {
  }

  small = () => {
    this.style.title.fontSize = '1rem';
  };
  switch = () => {
    this.show = this.common.switch(this.show);
  };

}

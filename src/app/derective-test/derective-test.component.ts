import {Component, OnInit} from '@angular/core';
import Styles from '../styles/style';

@Component({
  selector: 'app-derective-test',
  templateUrl: './derective-test.component.html',
  styleUrls: ['./derective-test.component.css']
})
export class DerectiveTestComponent implements OnInit {
  date = new Date();
  colors: string;
  code = 'DZ';
  defaultImg = 'https://static.lpnt.fr/images/2020/04/24/20278755lpw-20278769-article-geai-des-chenes-jpg_7068936_660x281.jpg';
  url = '';
  personnes = [
    {
      name: 'Perssone One',
      codeCountry: 'DZ'
    },
    {
      name: 'Perssone Tow',
      codeCountry: 'TN'
    },
    {
      name: 'Perssone Three',
      codeCountry: 'CA'
    }, {
      name: 'Perssone Three',
      codeCountry: ''
    }
  ];
  styles = Styles;
  cardStyle = Styles.main;
  check = (code) => {
    if (code === 'DZ') {
      this.colors = 'blue';
    } else {
      this.colors = 'red';
    }
    return true;
  };

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.date);
  }

  testSwitch = (value) => {
    switch (value) {
      case 'a':
        alert('A');
        break;
      case 'b':
        alert('B');
        break;
      default:
        alert('Default');
        break;
    }
  };
  cchangeColor = () => {
    this.cardStyle = Styles.main2;
  };
}

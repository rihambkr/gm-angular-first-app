import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-derective-test',
  templateUrl: './derective-test.component.html',
  styleUrls: ['./derective-test.component.css']
})
export class DerectiveTestComponent implements OnInit {
  colors: string;
  code = 'DZ';
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
}

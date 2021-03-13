import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colors = 'black';
  defaultColors = 'black';

  constructor() {
  }

  ngOnInit = () => {
  }

  onBlurEvent = (newColor) => {
    console.log(newColor);
    this.colors = newColor;
  }

// methode set color default
  defaultColor = () => {
    this.colors = this.defaultColors;
  }
}

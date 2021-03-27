import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-google-keep',
  templateUrl: './google-keep.component.html',
  styleUrls: ['./google-keep.component.css']
})
export class GoogleKeepComponent implements OnInit {
  isAdd = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  revert = () => {
    this.isAdd = !this.isAdd;
  };
}

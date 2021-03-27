import {Component, Input, OnInit} from '@angular/core';
import {Keep} from '../../../models/keep';

@Component({
  selector: 'app-card-keep',
  templateUrl: './card-keep.component.html',
  styleUrls: ['./card-keep.component.css']
})
export class CardKeepComponent implements OnInit {
  @Input() keep: Keep;

  constructor() {
  }

  ngOnInit(): void {
  }

}

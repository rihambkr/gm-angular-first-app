import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-our-keep-chlid',
  templateUrl: './our-keep-chlid.component.html',
  styleUrls: ['./our-keep-chlid.component.css']
})
export class OurKeepChlidComponent implements OnInit {
  name: string;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params.name;
  }

}

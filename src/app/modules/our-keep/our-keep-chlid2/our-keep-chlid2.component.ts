import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-our-keep-chlid2',
  templateUrl: './our-keep-chlid2.component.html',
  styleUrls: ['./our-keep-chlid2.component.css']
})
export class OurKeepChlid2Component implements OnInit {

  constructor(private  router: Router) {
  }

  ngOnInit(): void {
  }

  navigate = () => {
    this.router.navigate(['/client/child1', {name: 'Walid'}]);
  };

}

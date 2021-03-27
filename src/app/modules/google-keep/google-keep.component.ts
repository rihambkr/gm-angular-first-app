import {Component, OnInit} from '@angular/core';
import {Keep} from '../../models/keep';
import {KeepService} from '../../services/keep.service';

@Component({
  selector: 'app-google-keep',
  templateUrl: './google-keep.component.html',
  styleUrls: ['./google-keep.component.css']
})
export class GoogleKeepComponent implements OnInit {
  isAdd = false;
  keeps: Keep[];

  constructor(private service: KeepService) {
    this.service.getKeep().subscribe(res => {
      this.keeps = res;
    }, (error: any) => {
      console.log('ERROR : ' + error);
    });
  }

  ngOnInit(): void {
  }

  revert = () => {
    this.isAdd = !this.isAdd;
  };
}

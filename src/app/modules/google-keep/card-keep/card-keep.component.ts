import {Component, Input, OnInit} from '@angular/core';
import {Keep} from '../../../models/keep';
import {KeepService} from '../../../services/keep.service';

@Component({
  selector: 'app-card-keep',
  templateUrl: './card-keep.component.html',
  styleUrls: ['./card-keep.component.css']
})
export class CardKeepComponent implements OnInit {
  @Input() keep: Keep;
  keeps: Keep[];

  constructor(private  service: KeepService) {
    this.service.getKeep().subscribe(res => {
      console.log(res);
      this.keeps = res;
    }, (error: any) => {
      console.log('ERROR : ' + error);
    });
  }

  ngOnInit(): void {
  }

  remove = (title: string) => {
    const listTitle = this.keeps.map(e => e.title);
    const i = listTitle.indexOf(title);
    this.keeps.splice(i, 1);
    this.service.keep.next(this.keeps);
  };

}

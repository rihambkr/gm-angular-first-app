import {Injectable} from '@angular/core';
import {AutreService} from './autre.service';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  tab: any = [
    {
      nom: 'nom 1',
      email: 'email 1'
    }, {
      nom: 'nom 2',
      email: 'email 2'
    }, {
      nom: 'nom 2',
      email: 'email 2'
    },
  ];
  subject = new Subject<string>();
  bsubject = new BehaviorSubject<any>(this.tab);

  constructor(private autre: AutreService) {
    this.tab = [];
  }

  switch = (show: boolean): boolean => {
    this.autre.test();
    return !show;
  };

  remove = () => {
  };

}

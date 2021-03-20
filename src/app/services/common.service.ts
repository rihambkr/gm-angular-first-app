import {Injectable} from '@angular/core';
import {AutreService} from './autre.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  subject = new Subject<string>();

  constructor(private autre: AutreService) {
  }

  switch = (show: boolean): boolean => {
    this.autre.test();
    return !show;
  };


}

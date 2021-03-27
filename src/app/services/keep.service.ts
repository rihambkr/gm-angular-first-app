import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Keep} from '../models/keep';

@Injectable({
  providedIn: 'root'
})
export class KeepService {
  tab = [];
  keep = new BehaviorSubject<Keep[]>(this.tab);

  constructor() {
  }

  getKeep = (): Observable<Keep[]> => {
    return this.keep.asObservable();
  };
}

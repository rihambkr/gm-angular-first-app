import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutreService {

  constructor() {
  }

  test = () => {
    console.log('test');
  };
}

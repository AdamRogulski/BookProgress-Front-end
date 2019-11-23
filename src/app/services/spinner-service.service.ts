import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerServiceService {

  visibilty: BehaviorSubject<boolean>;
  buttonVis: BehaviorSubject<boolean>;

  constructor() {
    this.buttonVis = new BehaviorSubject(true);
    this.visibilty = new BehaviorSubject(false);
  }

  show() {
    this.visibilty.next(true);
    this.buttonVis.next(false);
  }

  hide() {
    this.visibilty.next(false);
    this.buttonVis.next(true);
  }
}

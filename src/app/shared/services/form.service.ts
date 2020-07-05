import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormSwitcherService {

  private numberFormSource$ = new BehaviorSubject(1);
  numberForm = this.numberFormSource$.asObservable();

  constructor() { }

  changeNumberForm(newNumberForm: number) {
    return this.numberFormSource$.next(newNumberForm);
  }
}

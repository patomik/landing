import { Injectable } from '@angular/core';
import { Observable, timer, BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  counter$: Observable<number>;
  count = 60 * 20;
  // private timeSource$ = new BehaviorSubject(this.count);
  // minutes = this.timeSource$.asObservable();

  constructor() {
    this.counter$ = timer(0, 1000).pipe(
      take(this.count),
      map(() => --this.count)
    );
   }
}




import { Component, Input, OnDestroy } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { switchMap, startWith, scan, takeWhile, takeUntil, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-number-tracker',
  templateUrl: './number-tracker.component.html',
  styleUrls: ['./number-tracker.component.scss']
})
export class NumberTrackerComponent implements OnDestroy {
  @Input()
  set end(endRange: number) {
    this.counterSub$.next(endRange);
  }
  @Input() countInterval = 20;
  @Input() iteratorValue = 1;
  public currentNumber = 0;
  private counterSub$ = new Subject();
  private onDestroy$ = new Subject();

  constructor() {
    this.counterSub$
      .pipe(
        switchMap(endRange => {
          return timer(0, this.countInterval).pipe(
            mapTo(this.positiveOrNegative(endRange, this.currentNumber)),
            startWith(this.currentNumber),
            scan((acc: number, curr: number) => acc + curr),
            takeWhile(this.isApproachingRange(endRange, this.currentNumber))
          )
        }),
        takeUntil(this.onDestroy$)
      )
      .subscribe((val: number) => this.currentNumber = val);
  }

  private positiveOrNegative(endRange, currentNumber) {
    return endRange > currentNumber ? this.iteratorValue : -10;
  }

  private isApproachingRange(endRange, currentNumber) {
    return endRange > currentNumber
      ? val => val <= endRange
      : val => val >= endRange;
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter, Input, AfterViewChecked } from '@angular/core';
import {DecimalPipe} from '@angular/common';
import { LoanDataService } from 'src/app/shared/services/loan-data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [DecimalPipe],
})
export class SliderComponent implements AfterViewInit, AfterViewChecked {
  @Output() slideData: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Input() sliderMRangeSel = [];
  // @ViewChild('mrangeslider') mSliderEl: ElementRef;
  connect = 'true';
  min = '20000';
  someRange = 3000;

  sliderMBounds = [500, 20000];

  constructor(private loanDataService: LoanDataService) {

  }


  // @ViewChild('slider', { read: ElementRef }) slider: ElementRef;

  // someKeyboardConfig: any = {
  //   behaviour: 'drag',
  //   connect: [true, true, true, true, true],
  //   start: [20, 40, 60, 80],
  //   keyboard: true, // same as [keyboard]="true"
  //   step: 0.1,
  //   pageSteps: 10, // number of page steps, defaults to 10
  //   range: {
  //     min: 0,
  //     max: 100,
  //   },
  //   pips: {
  //     mode: 'count',
  //     density: 2,
  //     values: 6,
  //     stepped: true,
  //   },
  // };
  ngAfterViewInit() {
    // this.sliderMRangeSel = [500, 3000];
    this.loanDataService.currentRange.subscribe(range => {
      this.sliderMRangeSel = range;
      this.ngAfterViewChecked();
      console.log('this.sliderMRangeSel :>> ', this.sliderMRangeSel);
    });
    // this.mSliderEl.nativeElement(this.sliderMRangeSel);
    // this.func();
  }
  ngAfterViewChecked() {

}

  updateSliderM($event) {
    this.loanDataService.changeRange($event);

    this.slideData.emit($event);

    // console.log('$event :>> ', $event);
    // console.log('sliderMRangeSel :>> ', this.sliderMRangeSel);
  }
  // func() {
  //   const connect = this.slider.nativeElement.querySelectorAll('.noUi-connect');
  //   const classes = [
  //     'c-1-color',
  //     'c-2-color',
  //     'c-3-color',
  //     'c-4-color',
  //     'c-5-color',
  //   ];
  //   console.log(connect.length);
  //   for (let i = 0; i < connect.length; i++) {
  //     connect[i].classList.add(classes[i]);
  //   }
  // }
}

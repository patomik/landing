import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormSwitcherService } from 'src/app/shared/services/form.service';
import { TimerService } from 'src/app/shared/services/timer.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, AfterViewChecked {
numberActiveForm = 1;
currentTime = 0;



steps = ['first', 'second', 'last'];
  constructor(private formSwitcherService: FormSwitcherService, private timerService: TimerService) { }

  ngOnInit(): void {
    this.formSwitcherService.numberForm.subscribe(numb => {
      this.numberActiveForm = numb;
      this.ngAfterViewChecked();
      console.log('this.numberActiveForm :>> ', this.numberActiveForm);
    });
    this.timerService.counter$.subscribe(time => this.currentTime = time);
  }

  ngAfterViewChecked() {

  }
  switchForm(numForm: number) {
// this.numberActiveForm = numForm;
  }
}

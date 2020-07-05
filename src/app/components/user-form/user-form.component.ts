import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormSwitcherService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, AfterViewChecked {
numberActiveForm = 1;
  constructor(private formSwitcherService: FormSwitcherService) { }

  ngOnInit(): void {
    this.formSwitcherService.numberForm.subscribe(numb => {
      this.numberActiveForm = numb;
      this.ngAfterViewChecked();
      console.log('this.numberActiveForm :>> ', this.numberActiveForm);
    });
  }

  ngAfterViewChecked() {

  }
  switchForm(numForm: number) {
// this.numberActiveForm = numForm;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormSwitcherService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-user-form-two',
  templateUrl: './user-form-two.component.html',
  styleUrls: ['./user-form-two.component.scss']
})
export class UserFormTwoComponent implements OnInit {
  constructor(private formSwitcherService: FormSwitcherService) {}

  ngOnInit(): void {}
  switchNextForm(numForm: number) {
    this.formSwitcherService.changeNumberForm(numForm);
  }

}

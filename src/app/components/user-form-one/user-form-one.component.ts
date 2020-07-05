import { Component, OnInit } from '@angular/core';
import { FormSwitcherService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-user-form-one',
  templateUrl: './user-form-one.component.html',
  styleUrls: ['./user-form-one.component.scss'],
})
export class UserFormOneComponent implements OnInit {
  constructor(private formSwitcherService: FormSwitcherService) {}

  ngOnInit(): void {}
  switchNextForm(numForm: number) {
    this.formSwitcherService.changeNumberForm(numForm);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormSwitcherService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-user-form-five',
  templateUrl: './user-form-five.component.html',
  styleUrls: ['./user-form-five.component.scss']
})
export class UserFormFiveComponent implements OnInit {
  constructor(private formSwitcherService: FormSwitcherService) {}

  ngOnInit(): void {}
  switchNextForm(numForm: number) {
    this.formSwitcherService.changeNumberForm(numForm);
  }

}

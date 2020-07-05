import { Component, OnInit } from '@angular/core';
import { FormSwitcherService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-user-form-four',
  templateUrl: './user-form-four.component.html',
  styleUrls: ['./user-form-four.component.scss']
})
export class UserFormFourComponent implements OnInit {
  constructor(private formSwitcherService: FormSwitcherService) {}

  ngOnInit(): void {}
  switchNextForm(numForm: number) {
    this.formSwitcherService.changeNumberForm(numForm);
  }

}

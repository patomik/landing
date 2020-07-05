import { Component, OnInit } from '@angular/core';
import { FormSwitcherService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-user-form-three',
  templateUrl: './user-form-three.component.html',
  styleUrls: ['./user-form-three.component.scss']
})
export class UserFormThreeComponent implements OnInit {
  constructor(private formSwitcherService: FormSwitcherService) {}

  ngOnInit(): void {}
  switchNextForm(numForm: number) {
    this.formSwitcherService.changeNumberForm(numForm);
  }

}

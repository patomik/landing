import { Component, OnInit } from '@angular/core';
import { FormSwitcherService } from 'src/app/shared/services/form.service';
import { UserService } from 'src/app/shared/services/user.service';
import { UserData } from 'src/app/shared/interfaces/userData';

@Component({
  selector: 'app-user-form-one',
  templateUrl: './user-form-one.component.html',
  styleUrls: ['./user-form-one.component.scss'],
})
export class UserFormOneComponent implements OnInit {
  isAgreementAccept = false;
  userData = {} as UserData;
  mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  constructor(private formSwitcherService: FormSwitcherService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userData.subscribe(ud => this.userData = ud );
  }
  switchNextForm(numForm: number) {
    this.formSwitcherService.changeNumberForm(numForm);
  }
  setUserData(key: string, value: any) {
    this.userService.setNewUserData(key, value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormSwitcherService } from 'src/app/shared/services/form.service';
import { UserService } from 'src/app/shared/services/user.service';
import { UserData } from 'src/app/shared/interfaces/userData';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form-one',
  templateUrl: './user-form-one.component.html',
  styleUrls: ['./user-form-one.component.scss'],
})
export class UserFormOneComponent implements OnInit {
  isAgreementAccept = false;
  userData = {} as UserData;
  registerForm: FormGroup;
    submitted = false;
  mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  constructor(private formSwitcherService: FormSwitcherService, private userService: UserService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userService.userData.subscribe(ud => this.userData = ud );
    this.registerForm = this.formBuilder.group({
      phone: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email]],
      agreementAccept: [false, Validators.requiredTrue]
  });
  }
  switchNextForm(numForm: number) {
    this.formSwitcherService.changeNumberForm(numForm);
  }
  setUserData(key: string, value: any) {
    this.userService.setNewUserData(key, value);
  }

  get f() { return this.registerForm.controls; }
  onSubmit( userForm) {
    console.log('userForm :>> ', userForm);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userData, null, 4));
    this.switchNextForm(2);
  }
}

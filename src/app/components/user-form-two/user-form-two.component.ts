import { Component, OnInit } from '@angular/core';
import { FormSwitcherService } from 'src/app/shared/services/form.service';
import { UserData } from 'src/app/shared/interfaces/userData';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-form-two',
  templateUrl: './user-form-two.component.html',
  styleUrls: ['./user-form-two.component.scss']
})
export class UserFormTwoComponent implements OnInit {
  isSelectShow = false;
  activeGoalIndex = 0;
  gender = 'male';
  userData = {} as UserData;
  sortGoals = [
    {typeGoal: 'Не выбрано'},
    {typeGoal: 'Ремонт/покупка техники, мебели'},
    {typeGoal: 'На лечение'},
    {typeGoal: 'Погашение другого кредита'},
    {typeGoal: 'Деньги до зарплаты'},
    {typeGoal: 'Другое'}
  ];
  constructor(private formSwitcherService: FormSwitcherService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userData.subscribe(ud => this.userData = ud );
  }
  switchNextForm(numForm: number) {
    this.setUserData('gender', this.gender);
    this.setUserData('goalCredit', this.sortGoals[this.activeGoalIndex].typeGoal);
    this.formSwitcherService.changeNumberForm(numForm);
  }

  setActiveGoal(i: number) {
    this.activeGoalIndex = i;
    console.log('this.activeGoalIndex :>> ', this.activeGoalIndex);
  }
  setUserData(key: string, value: any) {
    this.userService.setNewUserData(key, value);
  }

  setGender(sex: string) {
    this.gender = sex;
  }


}

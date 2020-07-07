import { Component, OnInit } from '@angular/core';
import { FormSwitcherService } from 'src/app/shared/services/form.service';
import { UserData } from 'src/app/shared/interfaces/userData';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-greatings',
  templateUrl: './greatings.component.html',
  styleUrls: ['./greatings.component.scss'],
})
export class GreatingsComponent implements OnInit {
  userData = {} as UserData;
  message = `Мы Вас поздравляем! Вы сделали необходимые шаги,
  чтобы наши специалисты связались с Вами для получения кредита!`;
  constructor(
    private formSwitcherService: FormSwitcherService,
    private userService: UserService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.userService.userData.subscribe((ud) => (this.userData = ud));
  }
  switchNextForm(numForm: number) {
    this.formSwitcherService.changeNumberForm(numForm);
  }

  saveUserData() {
    this.userService.setNewUserData('dateTimeAddData', new Date());
    this.userService.saveData();
    this.infoMessage();
  }

  infoMessage() {
    const message = 'I have some useful information for you...';
    this.toast.sendMessage(message, 'info');
  }
}

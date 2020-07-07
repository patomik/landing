import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from '../interfaces/userData';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = {} as UserData;
  private userDataSource$ = new BehaviorSubject(this.user);
  userData = this.userDataSource$.asObservable();

  constructor() { }

  setNewUserData(key: string, value: any) {
    this.user[key] = value;
    return this.userDataSource$.next(this.user);
  }
  saveData() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}

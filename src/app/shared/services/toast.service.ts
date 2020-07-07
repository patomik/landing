import { Injectable } from '@angular/core';
import { MessageToast } from '../interfaces/messageToast';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private db: AngularFireDatabase) {}

  getMessages(): AngularFireList<MessageToast[]> {
    return this.db.list('/messages', ref => ref.limitToLast(5));
  }

  sendMessage(content, style) {
    const message = new MessageToast(content, style);
    this.db.list('/messages').push(message);
  }

  dismissMessage(messageKey) {
    this.db.object(`messages/${messageKey}`).update({ dismissed: true });
  }
}

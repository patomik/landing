import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-unsubscribe',
  templateUrl: './sms-unsubscribe.component.html',
  styleUrls: ['./sms-unsubscribe.component.scss']
})
export class SmsUnsubscribeComponent implements OnInit {
  activeColor =  'white'; defaultColor =  '';
  textColor = '#959caa';
  constructor() { }

  ngOnInit(): void {
  }

}

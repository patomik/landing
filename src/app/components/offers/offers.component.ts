import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  activeColor =  'white'; defaultColor = '';
  textColor = '#499b30';
  constructor() { }

  ngOnInit(): void {
  }

}

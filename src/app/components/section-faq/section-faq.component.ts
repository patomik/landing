import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-section-faq',
  templateUrl: './section-faq.component.html',
  styleUrls: ['./section-faq.component.scss'],
  animations: [
    trigger('panelInOut', [
        transition('void => *', [
            style({transform: 'translateY(-100%)'}),
            animate(800)
        ]),
        transition('* => void', [
            animate(800, style({transform: 'translateY(-100%)'}))
        ])
    ])
]
})
export class SectionFaqComponent implements OnInit {
  faqInfo = [
    {question: 'КАК ПОЛУЧИТЬ ЗАЙМ?', answer: `Просто заполните анкету, подробности по одобрению будут
    высланы Вам на указанный номер телефон или email.`, flag: false},
    {question: 'КАК ПОЛУЧИТЬ ДЕНЬГИ?', answer: `Займ Вы можете получить на карту, наличными, на банковский
    счет.`, flag: false},
    {question: 'КАК ПОГАСИТЬ ЗАЙМ?', answer: `Вы можете погасить займ наличными деньгами, платежом с
    банковской карты, банковским переводом.`, flag: false},
    {question: 'КАК ЭТО РАБОТАЕТ?', answer: ` Заполните анкету, получите одобрение, заберите деньги
    выбранным способом.`, flag: false}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

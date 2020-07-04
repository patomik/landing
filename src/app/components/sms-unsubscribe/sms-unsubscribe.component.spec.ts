import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsUnsubscribeComponent } from './sms-unsubscribe.component';

describe('SmsUnsubscribeComponent', () => {
  let component: SmsUnsubscribeComponent;
  let fixture: ComponentFixture<SmsUnsubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsUnsubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

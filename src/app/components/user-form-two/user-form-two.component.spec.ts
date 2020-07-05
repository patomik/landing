import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormTwoComponent } from './user-form-two.component';

describe('UserFormTwoComponent', () => {
  let component: UserFormTwoComponent;
  let fixture: ComponentFixture<UserFormTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

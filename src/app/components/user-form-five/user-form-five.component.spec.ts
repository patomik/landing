import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormFiveComponent } from './user-form-five.component';

describe('UserFormFiveComponent', () => {
  let component: UserFormFiveComponent;
  let fixture: ComponentFixture<UserFormFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

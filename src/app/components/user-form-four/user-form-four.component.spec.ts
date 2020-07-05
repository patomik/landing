import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormFourComponent } from './user-form-four.component';

describe('UserFormFourComponent', () => {
  let component: UserFormFourComponent;
  let fixture: ComponentFixture<UserFormFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

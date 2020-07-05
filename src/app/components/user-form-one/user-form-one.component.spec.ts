import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormOneComponent } from './user-form-one.component';

describe('UserFormOneComponent', () => {
  let component: UserFormOneComponent;
  let fixture: ComponentFixture<UserFormOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormThreeComponent } from './user-form-three.component';

describe('UserFormThreeComponent', () => {
  let component: UserFormThreeComponent;
  let fixture: ComponentFixture<UserFormThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatingsComponent } from './greatings.component';

describe('GreatingsComponent', () => {
  let component: GreatingsComponent;
  let fixture: ComponentFixture<GreatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

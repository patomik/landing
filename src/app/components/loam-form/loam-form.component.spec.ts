import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoamFormComponent } from './loam-form.component';

describe('LoamFormComponent', () => {
  let component: LoamFormComponent;
  let fixture: ComponentFixture<LoamFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoamFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWeComponent } from './section-we.component';

describe('SectionWeComponent', () => {
  let component: SectionWeComponent;
  let fixture: ComponentFixture<SectionWeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionWeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

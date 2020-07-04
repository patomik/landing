import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionReviewComponent } from './section-review.component';

describe('SectionReviewComponent', () => {
  let component: SectionReviewComponent;
  let fixture: ComponentFixture<SectionReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

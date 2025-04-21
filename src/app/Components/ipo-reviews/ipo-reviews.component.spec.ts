import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoReviewsComponent } from './ipo-reviews.component';

describe('IpoReviewsComponent', () => {
  let component: IpoReviewsComponent;
  let fixture: ComponentFixture<IpoReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpoReviewsComponent]
    });
    fixture = TestBed.createComponent(IpoReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

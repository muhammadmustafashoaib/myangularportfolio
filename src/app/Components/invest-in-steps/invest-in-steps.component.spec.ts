import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestInStepsComponent } from './invest-in-steps.component';

describe('InvestInStepsComponent', () => {
  let component: InvestInStepsComponent;
  let fixture: ComponentFixture<InvestInStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestInStepsComponent]
    });
    fixture = TestBed.createComponent(InvestInStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

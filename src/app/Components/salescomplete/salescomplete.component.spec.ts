import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalescompleteComponent } from './salescomplete.component';

describe('SalescompleteComponent', () => {
  let component: SalescompleteComponent;
  let fixture: ComponentFixture<SalescompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalescompleteComponent]
    });
    fixture = TestBed.createComponent(SalescompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

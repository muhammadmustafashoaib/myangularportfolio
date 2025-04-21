import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAddcompComponent } from './sales-addcomp.component';

describe('SalesAddcompComponent', () => {
  let component: SalesAddcompComponent;
  let fixture: ComponentFixture<SalesAddcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesAddcompComponent]
    });
    fixture = TestBed.createComponent(SalesAddcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNinComponent } from './request-nin.component';

describe('RequestNinComponent', () => {
  let component: RequestNinComponent;
  let fixture: ComponentFixture<RequestNinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestNinComponent]
    });
    fixture = TestBed.createComponent(RequestNinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plumbing3Component } from './plumbing3.component';

describe('Plumbing3Component', () => {
  let component: Plumbing3Component;
  let fixture: ComponentFixture<Plumbing3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Plumbing3Component]
    });
    fixture = TestBed.createComponent(Plumbing3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

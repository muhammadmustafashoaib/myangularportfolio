import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plumbing1Component } from './plumbing1.component';

describe('Plumbing1Component', () => {
  let component: Plumbing1Component;
  let fixture: ComponentFixture<Plumbing1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Plumbing1Component]
    });
    fixture = TestBed.createComponent(Plumbing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

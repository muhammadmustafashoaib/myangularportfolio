import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plumber2Component } from './plumber2.component';

describe('Plumber2Component', () => {
  let component: Plumber2Component;
  let fixture: ComponentFixture<Plumber2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Plumber2Component]
    });
    fixture = TestBed.createComponent(Plumber2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

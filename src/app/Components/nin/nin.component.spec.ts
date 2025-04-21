import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinComponent } from './nin.component';

describe('NinComponent', () => {
  let component: NinComponent;
  let fixture: ComponentFixture<NinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NinComponent]
    });
    fixture = TestBed.createComponent(NinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

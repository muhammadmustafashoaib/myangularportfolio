import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumbingMainComponent } from './plumbing-main.component';

describe('PlumbingMainComponent', () => {
  let component: PlumbingMainComponent;
  let fixture: ComponentFixture<PlumbingMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlumbingMainComponent]
    });
    fixture = TestBed.createComponent(PlumbingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

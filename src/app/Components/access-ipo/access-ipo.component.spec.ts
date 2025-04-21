import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessIpoComponent } from './access-ipo.component';

describe('AccessIpoComponent', () => {
  let component: AccessIpoComponent;
  let fixture: ComponentFixture<AccessIpoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessIpoComponent]
    });
    fixture = TestBed.createComponent(AccessIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

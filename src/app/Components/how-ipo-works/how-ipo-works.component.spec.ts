import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowIpoWorksComponent } from './how-ipo-works.component';

describe('HowIpoWorksComponent', () => {
  let component: HowIpoWorksComponent;
  let fixture: ComponentFixture<HowIpoWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowIpoWorksComponent]
    });
    fixture = TestBed.createComponent(HowIpoWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

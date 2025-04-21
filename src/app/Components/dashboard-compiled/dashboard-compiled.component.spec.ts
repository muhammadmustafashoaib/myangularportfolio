import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCompiledComponent } from './dashboard-compiled.component';

describe('DashboardCompiledComponent', () => {
  let component: DashboardCompiledComponent;
  let fixture: ComponentFixture<DashboardCompiledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCompiledComponent]
    });
    fixture = TestBed.createComponent(DashboardCompiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

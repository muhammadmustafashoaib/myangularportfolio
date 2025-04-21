import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompiledTemplateComponent } from './compiled-template.component';

describe('CompiledTemplateComponent', () => {
  let component: CompiledTemplateComponent;
  let fixture: ComponentFixture<CompiledTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompiledTemplateComponent]
    });
    fixture = TestBed.createComponent(CompiledTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

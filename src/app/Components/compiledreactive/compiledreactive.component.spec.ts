import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompiledreactiveComponent } from './compiledreactive.component';

describe('CompiledreactiveComponent', () => {
  let component: CompiledreactiveComponent;
  let fixture: ComponentFixture<CompiledreactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompiledreactiveComponent]
    });
    fixture = TestBed.createComponent(CompiledreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

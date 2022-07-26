import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterObservablesComponent } from './counter-observables.component';

describe('CounterObservablesComponent', () => {
  let component: CounterObservablesComponent;
  let fixture: ComponentFixture<CounterObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

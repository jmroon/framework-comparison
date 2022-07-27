import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, map, skip, switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-counter-observables',
  templateUrl: './counter-observables.component.html',
  styleUrls: ['./counter-observables.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterObservablesComponent {
  @Input() label = 'Counter - Observables';
  @Output() counterChanged = new EventEmitter<void>();

  count$ = new BehaviorSubject(0);

  doubleCount$ = this.count$.pipe(map((count) => count * 2));

  private countChanged = 0;
  timesChanged$ = this.count$.pipe(
    skip(1),
    map(() => this.countChanged++),
    tap(() => this.counterChanged.emit())
  );

  timeSinceChange$ = this.count$.pipe(switchMap(() => timer(0, 1000)));

  decrement() {
    this.count$.next(this.count$.value - 1);
  }

  increment() {
    this.count$.next(this.count$.value + 1);
  }
}

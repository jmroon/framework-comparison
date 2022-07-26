import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, interval, map, merge } from 'rxjs';

@Component({
  selector: 'app-counter-observables',
  templateUrl: './counter-observables.component.html',
  styleUrls: ['./counter-observables.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterObservablesComponent {
  @Input() label = 'Counter - Observables';

  count$ = new BehaviorSubject(0);

  doubleCount$ = this.count$.pipe(map((count) => count * 2));

  private countChanged = 0;
  countChanged$ = this.count$.pipe(
    map(() => {
      this.countChanged++;
      return this.countChanged;
    })
  );

  private timeSinceChange = 0;
  timeSinceChange$ = merge(
    this.count$.pipe(
      map(() => {
        this.timeSinceChange = 0;
        return this.timeSinceChange;
      })
    ),
    interval(1000).pipe(
      map(() => {
        this.timeSinceChange = this.timeSinceChange + 1;
        return this.timeSinceChange;
      })
    )
  );

  decrement() {
    this.count$.next(this.count$.value - 1);
  }

  increment() {
    this.count$.next(this.count$.value + 1);
  }
}

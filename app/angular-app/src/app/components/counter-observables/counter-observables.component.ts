import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { combineLatest, map, Observable, switchMap, timer } from 'rxjs';

interface ChildProps {
  count: number;
  doubleCount: number;
  timeSinceChange: number;
}

@Component({
  selector: 'app-counter-observables',
  templateUrl: './counter-observables.component.html',
  styleUrls: ['./counter-observables.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterObservablesComponent implements OnInit {
  @Input() label = 'Counter - Observables';
  @Input() count$!: Observable<number>;
  @Output() increment = new EventEmitter<void>();

  private doubleCount$!: Observable<number>;
  private timeSinceChange$!: Observable<number>;

  childProps$!: Observable<ChildProps>;

  ngOnInit() {
    this.doubleCount$ = this.count$.pipe(map((count) => count * 2));
    this.timeSinceChange$ = this.count$.pipe(switchMap(() => timer(0, 1000)));
    this.childProps$ = combineLatest([this.count$, this.doubleCount$, this.timeSinceChange$]).pipe(
      map(([count, doubleCount, timeSinceChange]) => ({ count, doubleCount, timeSinceChange }))
    );
  }

  handleIncrement() {
    this.increment.emit();
  }
}

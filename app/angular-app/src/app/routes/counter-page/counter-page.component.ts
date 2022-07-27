import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
  count = 0;
  obsCount$ = new BehaviorSubject(0);

  constructor() {}

  handleIncrement() {
    this.count++;
  }

  handleReset() {
    this.count = 0;
  }

  handleObsIncrement() {
    this.obsCount$.next(this.obsCount$.value + 1);
  }

  handleObsReset() {
    this.obsCount$.next(0);
  }
}

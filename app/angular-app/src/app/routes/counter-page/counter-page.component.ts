import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { concat, map, Subject, switchMap, timer } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeOut', [
      transition('* => void', [
        animate(
          1000,
          style({
            opacity: 0
          })
        )
      ])
    ])
  ]
})
export class CounterPageComponent {
  displayChange = false;

  private displayObservableChangeSubject = new Subject<void>();
  displayObservableChange$ = this.displayObservableChangeSubject.pipe(
    switchMap(() =>
      concat(
        //
        timer(0).pipe(map(() => true)),
        timer(1000).pipe(map(() => false))
      )
    )
  );

  constructor(private cd: ChangeDetectorRef) {}

  timeout: number | undefined;
  onCounterChanged() {
    clearTimeout(this.timeout);
    this.displayChange = true;
    this.cd.markForCheck();
    this.timeout = setTimeout(() => {
      this.displayChange = false;
      this.cd.markForCheck();
    }, 1000);
  }

  onObservableCounterChanged() {
    this.displayObservableChangeSubject.next();
  }
}

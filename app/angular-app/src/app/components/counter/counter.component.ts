import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-counter[count]',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements DoCheck {
  @Input() label = 'Counter';

  // we could also use ngOnChanges but it is type unsafe
  private _count!: number;
  get count() {
    return this._count;
  }
  @Input() set count(count: number) {
    this._count = count;
    this.resetTimeSinceChange();
  }

  @Output() increment = new EventEmitter<void>();

  get doubleCount() {
    return this.count * 2;
  }

  timeSinceChange = 0;
  interval: number;

  constructor(private cd: ChangeDetectorRef) {
    this.interval = this.createTimer();
  }

  resetTimeSinceChange() {
    this.timeSinceChange = 0;
    clearInterval(this.interval);
    this.interval = this.createTimer();
  }

  createTimer() {
    return window.setInterval(() => {
      this.timeSinceChange++;
      // asynchronous changes need to be manually detected
      this.cd.markForCheck();
    }, 1000);
  }

  handleIncrement() {
    this.increment.emit();
  }

  ngDoCheck() {
    console.log('do check');
  }
}

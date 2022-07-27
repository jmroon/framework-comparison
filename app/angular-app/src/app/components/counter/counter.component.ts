import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit, DoCheck {
  @Input() label = 'Counter';
  @Output() counterChanged = new EventEmitter<void>();

  count = 0;
  doubleCount = 0;
  timesChanged = 0;
  timeSinceChange = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    setInterval(() => {
      this.timeSinceChange++;
      this.cd.markForCheck();
    }, 1000);
  }

  ngDoCheck() {
    console.log('do check');
  }

  decrement() {
    this.count--;
    this.doubleCount = this.count * 2;
    this.timesChanged++;
    this.timeSinceChange = 0;
    this.counterChanged.emit();
  }

  increment() {
    this.count++;
    this.doubleCount = this.count * 2;
    this.timesChanged++;
    this.timeSinceChange = 0;
    this.counterChanged.emit();
  }
}

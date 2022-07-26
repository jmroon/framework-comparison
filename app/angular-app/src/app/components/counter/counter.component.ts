import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  count = 0;
  doubleCount = 0;
  countChanged = 0;
  label = 'Counter';
  timeSinceChange = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    setInterval(() => {
      this.timeSinceChange++;
      this.cd.detectChanges();
    }, 1000);
  }

  decrement() {
    this.count--;
    this.doubleCount = this.count * 2;
    this.countChanged++;
    this.timeSinceChange = 0;
  }

  increment() {
    this.count++;
    this.doubleCount = this.count * 2;
    this.countChanged++;
    this.timeSinceChange = 0;
  }
}

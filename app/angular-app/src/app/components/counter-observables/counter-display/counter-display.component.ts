import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterDisplayComponent {
  @Input() label!: string;
  @Input() count!: number;
  @Input() doubleCount!: number;
  @Input() timeSinceChange!: number;

  @Output() increment = new EventEmitter<void>();
}

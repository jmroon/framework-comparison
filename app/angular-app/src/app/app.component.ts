import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  mousePosition$!: Observable<{ x: number; y: number }>;

  ngOnInit() {
    this.mousePosition$ = fromEvent<MouseEvent>(document, 'mousemove').pipe(
      map((event: MouseEvent) => ({ x: event.clientX, y: event.clientY })),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}

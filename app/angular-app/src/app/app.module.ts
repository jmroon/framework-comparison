import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CounterPageComponent } from './routes/counter-page/counter-page.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterObservablesComponent } from './components/counter-observables/counter-observables.component';
import { CounterDisplayComponent } from './components/counter-observables/counter-display/counter-display.component';

@NgModule({
  declarations: [AppComponent, CounterPageComponent, CounterComponent, CounterObservablesComponent, CounterDisplayComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

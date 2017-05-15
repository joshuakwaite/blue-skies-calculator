import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalcResultsComponent } from './calc-results/calc-results.component';
import { InputComponent } from './input/input.component';
import { StateSelectorComponent } from './state-selector/state-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcResultsComponent,
    InputComponent,
    StateSelectorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

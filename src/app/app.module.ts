import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2OrderModule } from 'ng2-order-pipe';

import { AppComponent } from './app.component';
import { CalcResultsComponent } from './calc-results/calc-results.component';
import { InputComponent } from './input/input.component';
import { CalculateService } from "./http.service";

@NgModule({
  declarations: [
    AppComponent,
    CalcResultsComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2OrderModule
  ],
  providers: [CalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

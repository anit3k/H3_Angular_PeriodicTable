import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { AtomCellComponent } from './atom-cell/atom-cell.component';
import { NumberDotConvertPipe } from './pipes/number-dot-convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PeriodicTableComponent,
    AtomCellComponent,
    NumberDotConvertPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './components/material/material.module';
import { PaginatePipe } from './pipes/paginate.pipe';

@NgModule({
  declarations: [AppComponent, ListComponent, PaginatePipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

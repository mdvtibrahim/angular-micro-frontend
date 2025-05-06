import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prod1Component } from './prod1/prod1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Prod1Component
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: Prod1Component },
      { path: 'feature', component: Prod1Component }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishesComponent } from './fishes/fishes.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    FishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

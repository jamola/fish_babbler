import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishesComponent } from './fishes/fishes.component';
import { FishDetailComponent } from './fish-detail/fish-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FishesComponent,
    FishDetailComponent
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

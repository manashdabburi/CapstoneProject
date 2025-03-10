import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';  // Import the HomepageComponent

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent  // Declare the HomepageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

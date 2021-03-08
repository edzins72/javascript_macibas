import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { CiparaDetektorsDirective } from './directives/cipara-detektors.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    CiparaDetektorsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

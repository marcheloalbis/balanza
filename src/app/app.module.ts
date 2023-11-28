import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BalanzaFormComponent } from './balanza-form/balanza-form.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    BalanzaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

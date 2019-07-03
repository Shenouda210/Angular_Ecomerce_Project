import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { UserAppModule } from './app2/userapp.module';
import { AdminAppModule } from './app/Adminapp.module';


@NgModule({
  declarations: [
    AppComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    UserAppModule,
    AdminAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

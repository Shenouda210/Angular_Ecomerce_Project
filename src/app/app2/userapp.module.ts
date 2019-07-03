import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './userapp-routing.module';
import { UserAppComponent } from './userapp.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { CartComponent } from './main/cart/cart.component';
import { ShopingCartComponent } from './main/shoping-cart/shoping-cart.component';
import { ProductDetailsComponent } from './main/product-details/product-details.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductFromAPIComponent } from './API/product-from-api/product-from-api.component';
@NgModule({
  declarations: [
    UserAppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    ShopingCartComponent,
    ProductDetailsComponent,
    MainComponent,
    ProductFromAPIComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [UserAppComponent]
})
export class UserAppModule { }

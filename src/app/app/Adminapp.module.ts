import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './Adminapp-routing.module';
import { AdminAppComponent } from './Adminapp.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
// catogries
import { CategoriesComponent } from './Components/categories/categories.component';
import { CategoryDetailsComponent } from './Components/categories/category-details/category-details.component';
import { HeaderComponent } from './Components/header/header.component';
import { AddCategoryComponent } from './Components/categories/add-category/add-category.component';
import { EditCategoryComponent } from './Components/categories/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './Components/categories/delete-category/delete-category.component';
// products
import { ProductsComponent } from './Components/products/products.component';
import { AddProductComponent } from './Components/products/add-product/add-product.component';
import { EditProductComponent } from './Components/products/edit-product/edit-product.component';
import { DeleteProductComponent } from './Components/products/delete-product/delete-product.component';
import { ProductDetailsComponent } from './Components/products/product-details/product-details.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AdminAppComponent,
    CategoriesComponent,
    CategoryDetailsComponent,
    HeaderComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    ProductsComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    ProductDetailsComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AdminAppComponent]
})
export class AdminAppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// catogries
import { CategoriesComponent } from './Components/categories/categories.component';
import { CategoryDetailsComponent } from './Components/categories/category-details/category-details.component';
import { AddCategoryComponent } from './Components/categories/add-category/add-category.component';
import { EditCategoryComponent } from './Components/categories/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './Components/categories/delete-category/delete-category.component';
// products
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/products/product-details/product-details.component';
import { AddProductComponent } from './Components/products/add-product/add-product.component';
import { EditProductComponent } from './Components/products/edit-product/edit-product.component';
import { DeleteProductComponent } from './Components/products/delete-product/delete-product.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  // auth
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
  {
      path: 'signup', component: UserComponent,
      children: [{ path: '', component: SignUpComponent }]
  },
  {
      path: 'login', component: UserComponent,
      children: [{ path: '', component: SignInComponent }]
  },
 
  { path : '', redirectTo:'/login', pathMatch : 'full'},
  // categories
 {path: 'Categories', component: CategoriesComponent,canActivate:[AuthGuard]},
 {path: 'CategoryDetails/:pid', component: CategoryDetailsComponent,canActivate:[AuthGuard]},
 {path: 'addCategory', component: AddCategoryComponent,canActivate:[AuthGuard]},
 {path: 'EditCategory/:pid', component: EditCategoryComponent,canActivate:[AuthGuard]},
 {path: 'DeleteCategory/:pid', component: DeleteCategoryComponent,canActivate:[AuthGuard]},
//  products
 {path: 'Products', component: ProductsComponent,canActivate:[AuthGuard]},
 {path: 'ProductDetails/:pid', component: ProductDetailsComponent,canActivate:[AuthGuard]},
 {path: 'addProduct', component: AddProductComponent},
 {path: 'EditProduct/:pid', component: EditProductComponent,canActivate:[AuthGuard]},
 {path: 'DeleteProduct/:pid', component: DeleteProductComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

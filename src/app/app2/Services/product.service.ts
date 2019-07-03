import { Sizes } from './../ViewModel/sizes';
import { Product } from './../ViewModel/Products';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Colors } from '../ViewModel/colors';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
// Get All Products
  GetProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.API_URL}api/products`);
  }
// Get Product By ID
  GetProductById(ID: string): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.API_URL}api/products/${ID}`);
  }

  GetColor(): Observable<Colors[]> {
    return this.httpClient.get<Colors[]>(`${environment.API_URL}Colors`);
  }

  GetSize(): Observable<Sizes[]> {
    return this.httpClient.get<Sizes[]>(`${environment.API_URL}Sizes`);
  }

// **********************   Card /**************/

addProductToCart(products: any) {
  localStorage.setItem('product', JSON.stringify(products));
}

  getProductFromCart() {
    return JSON.parse(localStorage.getItem('product'));
  }

  removeAllProductFromCart() {
    return localStorage.removeItem('product');
  }

  errorHandler(error: Response) {
    console.log(error);
    return throwError(error);
  }
}

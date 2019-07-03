import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../View Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  GetAllProducts(): Observable<Array<Product>> {
    var userToken= localStorage.getItem('userToken')
    const httpOptions = {headers: new HttpHeaders().set("Authorization", "Bearer " + userToken)
      };
    const apiURl = `${environment.API_URL}api/Products`;
    return this.http.get<Array<Product>>(apiURl,httpOptions);
  }
  GetProductById(ProdID: string): Observable<Product> {
    var userToken= localStorage.getItem('userToken')
    const httpOptions = {headers: new HttpHeaders().set("Authorization", "Bearer " + userToken)
      };
    const apiURl = `${environment.API_URL}api/Products/${ProdID}`;
    return this.http.get<Product>(apiURl,httpOptions);
  }
  addProduct(newproduct: Product) {
    var userToken= localStorage.getItem('userToken')
    const httpOptions = {headers: new HttpHeaders().set("Authorization", "Bearer " + userToken)
      };
    const apiURl = `${environment.API_URL}api/Products`;
    return this.http.post(apiURl,newproduct,httpOptions);
  }
  editProduct(catID: string , Cat: Product) {
    var userToken= localStorage.getItem('userToken')
    const httpOptions = {headers: new HttpHeaders().set("Authorization", "Bearer " + userToken)
      };
    const apiURl = `${environment.API_URL}api/Products/${catID}`;
    return this.http.put(apiURl,Cat,httpOptions);
  }
  deleteProduct(catID: string) {
    var userToken= localStorage.getItem('userToken')
    const httpOptions = {headers: new HttpHeaders().set("Authorization", "Bearer " + userToken)
      };
    const apiURl = `${environment.API_URL}api/Products/${catID}`;
    return this.http.delete(apiURl,httpOptions);
  }
}

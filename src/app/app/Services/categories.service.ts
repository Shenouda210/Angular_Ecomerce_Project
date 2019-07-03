import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Icategory } from '../View Models/icategory';
import { AddCategory } from '../View Models/addaa-category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  GetAllCategories(): Observable<Array<Icategory>> {
    var userToken= localStorage.getItem('userToken')
    const httpOptions = {headers: new HttpHeaders().set("Authorization", "Bearer " + userToken)
      };
    const apiURl = `${environment.API_URL}api/Categories`;
    return this.http.get<Array<Icategory>>(apiURl,httpOptions);
  }
  GetCategoryById(ProdID: string): Observable<Icategory> {
    var userToken= localStorage.getItem('userToken')
    const httpOptions = {headers: new HttpHeaders().set("Authorization", "Bearer " + userToken)
      };
    const apiURl = `${environment.API_URL}api/Categories/${ProdID}`;
    return this.http.get<Icategory>(apiURl,httpOptions);
  }
  addCategory(newCat: AddCategory) {
    var userToken= localStorage.getItem('userToken')
    const httpOptions = {headers: new HttpHeaders().set("Authorization", "Bearer " + userToken)
      }
    const apiURl = `${environment.API_URL}api/Categories`;
    return this.http.post(apiURl, newCat , httpOptions);
  }
  editCategory(catID: string , Cat: AddCategory) {
   var userToken= localStorage.getItem('userToken')
    const httpOptions = {headers: new HttpHeaders().set("Authorization", "Bearer " + userToken)
      };
    const apiURl = `${environment.API_URL}api/Categories/${catID}`;
    return this.http.put(apiURl,Cat,httpOptions);
  }
  deleteCategory(catID: string) {
    var userToken= localStorage.getItem('userToken')
    const httpOptions = {headers: new HttpHeaders().set("Authorization", "Bearer " + userToken)
      };
    const apiURl = `${environment.API_URL}api/Categories/${catID}`;
    return this.http.delete(apiURl, httpOptions);
  }
}

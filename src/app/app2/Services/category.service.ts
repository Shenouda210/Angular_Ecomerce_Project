import { Category } from './../ViewModel/Category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  GetCategorys(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${environment.API_URL}api/Categories`);
  }
}

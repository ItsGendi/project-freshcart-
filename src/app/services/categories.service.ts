import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  BaseUrl = `https://ecommerce.routemisr.com`;
  constructor(private _http: HttpClient) {}

  getCategories(): Observable<any> {
    return this._http.get(`${this.BaseUrl}/api/v1/categories`);
  }

  getCategoryDetails(id: any): Observable<any> {
    return this._http.get(`${this.BaseUrl}/api/v1/categories/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  BaseUrl = `https://ecommerce.routemisr.com`;
  orderId:any;
  constructor(private _Orders: HttpClient) {}

  getOrders(): Observable<any> {
    return this._Orders.get(`${this.BaseUrl}/api/v1/orders/`);
  }

  getUserOrders(id:any): Observable<any> {
    return this._Orders.get(`${this.BaseUrl}/api/v1/orders/user/${id}`)
  }
}

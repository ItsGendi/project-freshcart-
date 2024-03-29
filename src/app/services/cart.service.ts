import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  BaseUrl: string = `https://ecommerce.routemisr.com`;
  cartNumber: BehaviorSubject<number> = new BehaviorSubject(0);
  headers: any = {
    token: localStorage.getItem('userToken'),
  };

  constructor(private _http: HttpClient) {}

  addToCart(id: string): Observable<any> {
    return this._http.post(
      `${this.BaseUrl}/api/v1/cart`,
      {
        productId: id,
      },
      {
        headers: this.headers,
      }
    );
  }

  getItemOfCart(): Observable<any> {
    return this._http.get(`${this.BaseUrl}/api/v1/cart`, {
      headers: this.headers,
    });
  }

  updateCart(count: number, id: string): Observable<any> {
    return this._http.put(
      `${this.BaseUrl}/api/v1/cart/${id}`,
      {
        count: count,
      },
      {
        headers: this.headers,
      }
    );
  }

  deleteCart(id: string): Observable<any> {
    return this._http.delete(`${this.BaseUrl}/api/v1/cart/${id}`, {
      headers: this.headers,
    });
  }

  checkout(id: string, formData: any): Observable<any> {
    return this._http.post(
      `${this.BaseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
      {
        shippingAddress: formData,
      },
      {
        headers: this.headers,
      }
    );
  }

  clearAllCart(): Observable<any> {
    return this._http.delete(`${this.BaseUrl}/api/v1/cart/`, {
      headers: this.headers,
    });
  }
}

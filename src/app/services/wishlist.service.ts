import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`;
  headers: any = {
    token: localStorage.getItem('userToken'),
  };
  wishListNumber = new BehaviorSubject(0);

  constructor(private _http: HttpClient) {
    this.getWishlist().subscribe({
      next: (response) => {
        console.log('wishListNumber', response);
        this.wishListNumber.next(response.count);
      },
    });
  }

  addToWishlist(prodId: any): Observable<any> {
    return this._http.post(
      this.baseUrl + `wishlist`,
      {
        productId: prodId,
      },
      {
        headers: this.headers,
      }
    );
  }

  getWishlist(): Observable<any> {
    return this._http.get(this.baseUrl + `wishlist`, {
      headers: this.headers,
    });
  }

  removeItemFromWishlist(prodId: any): Observable<any> {
    return this._http.delete(this.baseUrl + `wishlist/${prodId}`, {
      headers: this.headers,
    });
  }
}

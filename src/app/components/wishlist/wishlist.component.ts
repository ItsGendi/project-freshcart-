import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { WishlistService } from 'src/app/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  product: any;
  constructor(
    private _http: WishlistService,
    private toastr: ToastrService,
    private _cart: CartService
  ) {}
  productList: Products[] = [];
  wishListData: string[] = [];

  ngOnInit(): void {
    this._http.getWishlist().subscribe({
      next: (response) => {
        console.log(response);
        this.productList = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });

    this._http.getWishlist().subscribe({
      next: (response) => {
        // console.log('wishlist', response.data);
        const newData = response.data.map((item: any) => item._id);
        // console.log('newData', newData);
        this.wishListData = newData;
      },
    });
  }

  addFav(prodId: any): void {
    this._http.addToWishlist(prodId).subscribe({
      next: (response) => {
        console.log(response);
        this.toastr.success(response.message);
        this.wishListData = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  addToMyCart(productId: string) {
    this._cart.addToCart(productId).subscribe({
      next: (resp) => {
        console.log(resp);
        this.toastr.success(resp.message, '', {
          closeButton: true,
          progressBar: true,
          timeOut: 2000,
        });
        this._cart.cartNumber.next(resp.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeFav(prodId: any): void {
    this._http.removeItemFromWishlist(prodId).subscribe({
      next: (response) => {
        console.log(response);
        this.toastr.success(response.message);
        this.wishListData = response.data;

        this._http.getWishlist().subscribe({
          next: (response) => {
            this.productList = response.data;
            this._http.wishListNumber.next(response.count);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

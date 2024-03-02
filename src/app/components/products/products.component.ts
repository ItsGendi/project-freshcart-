import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  wishListData: string[] = [];
  wishListNumber: any = 0;

  addToMyCart(arg0: string) {
    throw new Error('Method not implemented.');
  }
  productListProducts: Products[] = [];
  constructor(
    private _productPage: ProductsService,
    private _cart: CartService,
    private toastr: ToastrService,
    private _http: WishlistService
  ) {}

  ngOnInit(): void {
    this._productPage.getProducts().subscribe({
      next: (response) => {
        this.productListProducts = response.data;
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

  addToMyCartProducts(productId: string) {
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

  removeFav(prodId: any): void {
    this._http.removeItemFromWishlist(prodId).subscribe({
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
}

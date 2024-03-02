import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productList: Products[] = [];
  searchValue: string = '';
  wishListData: string[] = [];

  constructor(
    private _product: ProductsService,
    private _cart: CartService,
    private toastr: ToastrService,
    private _http: WishlistService
  ) {}

  ngOnInit(): void {
    this._product.getProducts().subscribe({
      next: (response) => {
        this.productList = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.getCategory();

    this._http.getWishlist().subscribe({
      next: (response) => {
        // console.log('wishlist', response.data);
        const newData = response.data.map((item: any) => item._id);
        // console.log('newData', newData);
        this.wishListData = newData;
      },
    });
  }

  categoryList: any[] = [];
  getCategory() {
    this._product.getCategories().subscribe({
      next: (response) => {
        this.categoryList = response.data;
        // console.log(this.categoryList);
      },
      error: () => {},
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };

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

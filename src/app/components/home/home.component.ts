import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productList: Products[] = [];
  constructor(
    private _product: ProductsService,
    private _cart: CartService,
    private toastr: ToastrService
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
  }

  categoryList: any[] = [];
  getCategory() {
    this._product.getCategories().subscribe({
      next: (response) => {
        this.categoryList = response.data;
        console.log(this.categoryList);
      },
      error: () => {},
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
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
        // console.log(resp);
        this.toastr.success(resp.message, '', {
          closeButton: true,
          progressBar:true,
          timeOut:2000
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

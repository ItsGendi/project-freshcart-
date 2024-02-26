import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  addToMyCart(arg0: string) {
    throw new Error('Method not implemented.');
  }
  productListProducts: Products[] = [];
  constructor(
    private _productPage: ProductsService,
    private _cart: CartService,
    private toastr: ToastrService
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
  }

  addToMyCart2(productId: string) {
    this._cart.addToCart(productId).subscribe({
      next: (resp) => {
        console.log(resp);
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

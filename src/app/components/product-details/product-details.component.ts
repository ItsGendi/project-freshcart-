import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  productDetails: any;
  constructor(
    private _Activated: ActivatedRoute,
    private _product: ProductsService,
    private _cart: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let productId = this._Activated.snapshot.params['Id'];
    this._product.productDetails(productId).subscribe({
      next: (response) => {
        this.productDetails = response.data;
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

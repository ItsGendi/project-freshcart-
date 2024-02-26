import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss'],
})
export class MycartComponent implements OnInit {
  cartItem: any;
  constructor(private _cart: CartService) {}

  ngOnInit(): void {
    this.getMyCart();
  }

  getMyCart() {
    this._cart.getItemOfCart().subscribe({
      next: (resp) => {
        console.log(resp);
        this.cartItem = resp.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateMyCart(count: number, id: string) {
    if(count == 0){
      this.deleteMyCart(id)
    }
    console.log(count, id);
    this._cart.updateCart(count, id).subscribe({
      next: (resp) => {
        console.log(resp);
        // this.getMyCart();
        this.cartItem = resp.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteMyCart(id: string) {
    this._cart.deleteCart(id).subscribe({
      next: (resp) => {
        console.log(resp);
        this.cartItem = resp.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

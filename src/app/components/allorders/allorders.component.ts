import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss'],
})
export class AllordersComponent implements OnInit {
  orderData: any[] = [];
  cartItems: any;
  constructor(private _Order: OrdersService) {}
  ngOnInit(): void {
    this._Order.getOrders().subscribe({
      next: (response) => {
        console.log(response);
        this.cartItems = response.data;
      },
    });
  }
}

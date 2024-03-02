import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  constructor(private _cart: CartService) {}

  checkOutForm: FormGroup = new FormGroup({
    details: new FormControl(null, [
      Validators.required,
      Validators.minLength(24),
      Validators.maxLength(128),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(002)?(01)[0125][0-9]{8}$/),
    ]),
    city: new FormControl(null, [
      Validators.required,
    ]),
  });

  chechOutSubmit(form: FormGroup) {
    console.log(form);
  }

  ngOnInit(): void {
    this.getMyCart();
  }

  cartId: string = '';
  getMyCart() {
    this._cart.getItemOfCart().subscribe({
      next: (resp) => {
        console.log(resp);
        this.cartId = resp.data._id;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  payment(form: FormGroup) {
    console.log(form.value);
    this._cart.checkout(this.cartId, form.value).subscribe({
      next: (resp) => {
        console.log(resp);
        window.location = resp.session.url;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

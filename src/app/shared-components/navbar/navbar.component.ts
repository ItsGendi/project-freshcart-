import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  cartNum: number = 0;
  wishListNumber:any=0;
  constructor(
    private _auth: AuthService,
    private _http: CartService,
    private _wishlist: WishlistService
  ) {
    _auth.userData.subscribe({
      next: () => {
        if (_auth.userData.getValue() !== null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      },
    });
  }

  ngOnInit(): void {
    this._wishlist.wishListNumber.subscribe({
      next: (response) => {
        console.log(response);
        this.wishListNumber = response
      },
    });

    this._http.cartNumber.subscribe({
      next: (data) => {
        console.log('nav', data);
        this.cartNum = data;
      },
    });

    this._http.getItemOfCart().subscribe({
      next: (response) => {
        console.log('nav', response);
        this.cartNum = response.numOfCartItems;
      },
    });
    
  }

  logout(): void {
    this._auth.logout();
  }
}

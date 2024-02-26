import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLogin: boolean = false;
  constructor(private _auth: AuthService) {
    _auth.userData.subscribe({
      next: () => {    if (_auth.userData.getValue() !== null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }},
    });
  }


  logout():void{
    this._auth.logout()
  }



}

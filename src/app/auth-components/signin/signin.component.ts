import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  errors!:string;
  isLoading:boolean=false;
  constructor(private _auth:AuthService,private _router:Router){

  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/),
    ]),
  });

  loginSubmit(form: FormGroup) {
    this.isLoading = true;
    // console.log(form.value)
    if (this.loginForm.valid) {
      this._auth.login(form.value).subscribe({
        next: (response) => {
          console.log(response);
          if (response.message == 'success') {
            localStorage.setItem('userToken',response.token)
            this._auth.saveUserData();
            this._router.navigate(['/home']);
          }
          this.isLoading = false;
        }, 
        error: (err) => {
          console.log(err);
          this.errors = err.error.errors.msg;
          this.isLoading = false;
        },
      });
    }
  }
}

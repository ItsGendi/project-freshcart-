import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  msgSuccss: any;
  msgErr: any;
  msgSu:any;

  constructor(private _auth: AuthService, private Router:Router) {}
  forgotPassword = new FormGroup({
    email: new FormControl(),
  });

  sendCode(form: FormGroup): void {
    console.log(form);
    this._auth.forgotPassword(form.value).subscribe({
      next: (response) => {
        console.log(response);
        this.msgSuccss = response.message;
        document.querySelector('.forgotPassword')?.classList.add('d-none');
        document.querySelector('.verifyCode')?.classList.remove('d-none');
      },
      error: (err) => {
        console.log(err);
        this.msgErr = err.error.message;
      },
    });
  }

  verifyCode = new FormGroup({
    resetCode: new FormControl(),
  });

  verifyResetCode(form: FormGroup) {
    this._auth.verifyCode(form.value).subscribe({
      next:(response)=>{console.log(response );
        this.msgSu = response.message;
        if(response.status == 'Success'){
          this.Router.navigate(['/resetpassword'])
        }
      },
      error:(err)=>{console.log(err);
      },
    })
  }
}

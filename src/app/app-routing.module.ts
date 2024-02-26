import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SigninComponent } from './auth-components/signin/signin.component';
import { SignupComponent } from './auth-components/signup/signup.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { authGuard } from './auth.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

const routes: Routes = [
  // {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',canActivate:[authGuard],component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'brands',canActivate:[authGuard],component:BrandsComponent},
  {path:'products',canActivate:[authGuard],component:ProductsComponent},
  {path:'productdetails/:Id',canActivate:[authGuard],component:ProductDetailsComponent},
  {path:'Categories',canActivate:[authGuard],component:CategoriesComponent},
  {path:'mycart',canActivate:[authGuard],component:MycartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

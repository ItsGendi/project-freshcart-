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
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { BrandsdetailsComponent } from './components/brandsdetails/brandsdetails.component';

const routes: Routes = [
  // {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',canActivate:[authGuard],component:HomeComponent},
  {path:'signin',component:SigninComponent,title:'Sign in'},
  {path:'signup',component:SignupComponent,title:'Sign up'},
  {path:'forgotpassword',component:ForgotPasswordComponent,title:'Forgot password'},
  {path:'resetpassword',component:ResetpasswordComponent,title:'Reset your password'},
  {path:'home',canActivate:[authGuard],component:HomeComponent,title:'Home'},
  {path:'brands',canActivate:[authGuard],component:BrandsComponent,title:'All Brands'},
  {path:'brandsdetails/:Id',canActivate:[authGuard],component:BrandsdetailsComponent,title:'Brands details'},
  {path:'products',canActivate:[authGuard],component:ProductsComponent,title:'All Product'},
  {path:'productdetails/:Id',canActivate:[authGuard],component:ProductDetailsComponent,title:'Product details'},
  {path:'categories',canActivate:[authGuard],component:CategoriesComponent,title:'All Categories'},
  {path:'categorydetails/:Id',canActivate:[authGuard],component:CategoryDetailsComponent,title:'Category details'},
  {path:'mycart',canActivate:[authGuard],component:MycartComponent,title:'My Cart'},
  {path:'wishlist',canActivate:[authGuard],component:WishlistComponent,title:'My Wishlist'},
  {path:'checkout',canActivate:[authGuard],component:PaymentComponent,title:'Checkout'},
  {path:'allorders',canActivate:[authGuard],component:AllordersComponent,title:'All Orders'},
  // {path:'allorders',canActivate:[authGuard],component:AllordersComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

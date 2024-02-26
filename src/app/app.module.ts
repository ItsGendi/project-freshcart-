import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './auth-components/signin/signin.component';
import { SignupComponent } from './auth-components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NotfoundComponent,
    NavbarComponent,
    CategoriesComponent,
    BrandsComponent,
    ProductsComponent,
    WishlistComponent,
    MycartComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    ProductDetailsComponent,
    ForgotPasswordComponent,
    ResetpasswordComponent,
    MainSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

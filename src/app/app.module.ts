import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './Components/product/product.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { ProductService } from './services/product.service';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { AppRoutingModule } from './router.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserLayoutComponent } from './Components/User-layout/User-layout.component';
import { VendorLayoutComponent } from './Components/vendor-layout/vendor-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductComponent,
    ProductListComponent,
    MaxLengthPipe,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    NavbarComponent,
    WishlistComponent,
    UserLayoutComponent,
    VendorLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

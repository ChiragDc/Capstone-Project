import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component'
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddTagToProductComponent } from './admin/add-tag-to-product/add-tag-to-product.component';
import { AddTagComponent } from './admin/add-tag/add-tag.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { DisplayTagComponent } from './display-tag/display-tag.component';
import { GroceryWebComponent } from './grocery-web/grocery-web.component';
import { OrdersComponent } from './grocery-web/orders/orders.component';
import { ProductsComponent } from './grocery-web/products/products.component';
import { SampleProductComponent } from './grocery-web/sample-product/sample-product.component';
import { ShoppingCartComponent } from './grocery-web/shopping-cart/shopping-cart.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { OverlayComponent } from './overlay/overlay.component';
import { NgDialogAnimationService } from 'ng-dialog-animation';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    UpdateProfileComponent,
    AddCategoryComponent,
    AddProductComponent,
    AddTagToProductComponent,
    AddTagComponent,
    CategoriesComponent,
    DashboardComponent,
    DisplayCategoryComponent,
    DisplayTagComponent,
    GroceryWebComponent,
    OrdersComponent,
    ProductsComponent,
    SampleProductComponent,
    ShoppingCartComponent,
    RegisterComponent,
    FooterComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [NgDialogAnimationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

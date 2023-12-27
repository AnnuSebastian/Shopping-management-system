import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { DatePipe } from '@angular/common';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { TokenInterceptor } from './Auth/token.interceptor';

@NgModule({ //components or directives that can be used in the app
  declarations: [
    AppComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    AddProductComponent,
    ListProductComponent,
    UpdateProductComponent,
    LoginComponent,
    RegisterComponent,
    UpdateCategoryComponent
  ],
  imports: [ //other shared modules that provide functionalities in the app
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, //register services the dependencies
  {provide:HTTP_INTERCEPTORS, useClass: TokenInterceptor,multi:true}],
  bootstrap: [AppComponent] //this is the entry point into the app that defines that should start first
  
})
export class AppModule { }

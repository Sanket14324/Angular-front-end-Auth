import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { AddNewEmployeeService } from './add-new-employee.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HomeUserComponent } from './home-user/home-user.component';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginServiceService } from './login-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    HomeComponent,
    LoginComponent,
    UpdateEmployeeComponent,
    HomeUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [AddNewEmployeeService, LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

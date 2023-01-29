import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { HomeUserComponent } from './home-user/home-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"add", component:AddEmployeeComponent},
  {path:"admin", component:HomeComponent},
  {path:"update", component:UpdateEmployeeComponent},
  {path:"user", component:HomeUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

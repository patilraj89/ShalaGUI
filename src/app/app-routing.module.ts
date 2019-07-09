import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Dashboard/dash.component';
import { StaffRegistration } from './StaffRegistration/staffRegister.component';
import {ViewStaff} from './ViewStaff/viewStaff.component';
import {LoginComponentComponent} from './login/login-component/login-component.component';
import {ForgotPasswordComponent} from './login/forgot-password/forgot-password.component';
const routes: Routes = [

  { path:'dashboard', component: DashboardComponent},
  {path:'staffRegister',component:StaffRegistration},
  {path:'viewStaff',component:ViewStaff},
  { path:'fpass', component: ForgotPasswordComponent},
  { path:'', component: LoginComponentComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

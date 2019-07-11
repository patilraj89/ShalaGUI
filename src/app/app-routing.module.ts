import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './main-page-module/Dashboard/dash.component';
import { StaffRegistration } from './main-page-module/staffReg/staffregister.component';
import {ViewStaff} from './main-page-module/ViewStaff/viewStaff.component';
import {LoginComponentComponent} from './login-module/login-component/login-component.component';
import {ForgotPasswordComponent} from './login-module/forgot-password/forgot-password.component';
import {MainPageComponent} from './main-page-module/main-page/main-page.component';
const routes: Routes = [

//   { path:'dashboard',component: DashboardComponent},
//   {path:'staffRegister',component:StaffRegistration},
//   {path:'viewStaff',component:ViewStaff},
  { path:'fpass', component: ForgotPasswordComponent},
  { path:'mpage', component: MainPageComponent,
	children:[{ path:'',component: DashboardComponent},
  {path:'staffRegister',component:StaffRegistration},
  {path:'viewStaff',component:ViewStaff}

	]},
  { path:'', component: LoginComponentComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

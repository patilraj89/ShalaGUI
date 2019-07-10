import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Dashboard/dash.component';
import { StaffRegistration } from './StaffRegistration/staffRegister.component';
import {ViewStaff} from './ViewStaff/viewStaff.component';
import {LoginComponentComponent} from './login/login-component/login-component.component';
import {ForgotPasswordComponent} from './login/forgot-password/forgot-password.component';
import {MainPageComponent} from './main-page/main-page.component';
const routes: Routes = [

//   { path:'dashboard',component: DashboardComponent},
//   {path:'staffRegister',component:StaffRegistration},
//   {path:'viewStaff',component:ViewStaff},
  { path:'fpass', component: ForgotPasswordComponent},
  { path:'mpage', component: MainPageComponent,
	children:[{ path:'',component: DashboardComponent,outlet: 'mp'},
  {path:'staffRegister',component:StaffRegistration,outlet: 'mp'},
  {path:'viewStaff',component:ViewStaff,outlet: 'mp'}

	]},
  { path:'', component: LoginComponentComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

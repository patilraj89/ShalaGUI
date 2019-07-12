import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './main-page-module/Dashboard/dash.component';
import { StaffRegistration } from './main-page-module/staffReg/staffregister.component';
import {ViewStaff} from './main-page-module/ViewStaff/viewStaff.component';
import {LoginComponentComponent} from './login-module/login-component/login-component.component';
import {ForgotPasswordComponent} from './login-module/forgot-password/forgot-password.component';
import {MainPageComponent} from './main-page-module/main-page/main-page.component';
import { AuthGaurdService } from './Authentication/service/auth-guard.service';
const routes: Routes = [
	//login and default login
	{ 
	  path:'login', 
	  component: LoginComponentComponent
	},
  { 
	  path:'', 
	  component: LoginComponentComponent
	},
	
	//forgot Password
  { 
	  path:'fpass', 
	  component: ForgotPasswordComponent
	},
  
	//Main Page and child Route
  { 
	  path:'mpage', 
	  component: MainPageComponent,
	  canActivate:[AuthGaurdService],
	children:
	[
		{ path:'',
		component: DashboardComponent,
		canActivate:[AuthGaurdService]
	},

  {
	  path:'staffRegister',
	  component:StaffRegistration,
	  canActivate:[AuthGaurdService]
	},
  {
	  path:'viewStaff',
	  component:ViewStaff,
	  canActivate:[AuthGaurdService]
	}

	]}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [LoginComponentComponent, ForgotPasswordComponent],
  imports: [
	CommonModule,
	AppRoutingModule
  ]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginComponentComponent, ForgotPasswordComponent],
  imports: [
	CommonModule,
	AppRoutingModule,
	ReactiveFormsModule
  ]
})
export class LoginModule { }

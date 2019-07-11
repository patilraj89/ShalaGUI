import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
@NgModule({
  declarations: [LoginComponentComponent, ForgotPasswordComponent],
  imports: [
	CommonModule,
	AppRoutingModule,
	ReactiveFormsModule,
	Ng4LoadingSpinnerModule.forRoot(),
  ]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {DashboardComponent} from './Dashboard/dash.component';
import {MainPageComponent} from './main-page/main-page.component';
import {StaffRegistration} from './staffReg/staffregister.component';
import {ViewStaff} from './ViewStaff/viewStaff.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
@NgModule({
  declarations: [
	  MainPageComponent,
	  DashboardComponent,
	  StaffRegistration,
	  ViewStaff
  ],
  imports: [
	CommonModule,
	AppRoutingModule,
	ReactiveFormsModule,
	Ng4LoadingSpinnerModule.forRoot(),
  ]
})
export class MainPageModule { }

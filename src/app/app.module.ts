import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/dash.component';
import { StaffRegistration } from './StaffRegistration/staffRegister.component';
import { HostConfigService } from './host-config-srvice/host-config-service';
import {ResourcesService} from './ResourcesService/resources-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {ViewStaff} from './ViewStaff/viewStaff.component';
import { AgGridModule } from 'ag-grid-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {LoginModule} from './login/login.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StaffRegistration,
    ViewStaff,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    AgGridModule.withComponents([]),
    Ng2SearchPipeModule,
    Ng2OrderModule,
	NgxPaginationModule,
	LoginModule
   
  ],
  providers: [HostConfigService,ResourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

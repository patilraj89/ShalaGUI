import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostConfigService } from './host-config-srvice/host-config-service';
import {ResourcesService} from './ResourcesService/resources-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AgGridModule } from 'ag-grid-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {LoginModule} from './login-module/login.module'
import {MainPageModule} from './main-page-module/main-page-module';



@NgModule({
  declarations: [
    AppComponent,   
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
	LoginModule,
	MainPageModule
   
  ],
  providers: [HostConfigService,ResourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Component,OnInit} from '@angular/core';
import { LoginDataShareService } from '../../login-module/login-data-share-service/login-data-service';
@Component({
    selector:'dashboard',
    templateUrl:'./dash.component.html'
})

export class DashboardComponent implements OnInit{
    lgData = {};
    usr;
    tkn
	constructor(
        private loginDataShare: LoginDataShareService
    ){}

	ngOnInit(){
       
      this.usr = sessionStorage.getItem('username');
      this.tkn  = sessionStorage.getItem('tkn');
      console.log('User Name=', this.usr);
      console.log('Token=', this.tkn);
	}
}
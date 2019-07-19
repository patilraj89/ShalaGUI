import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Authentication/service/authentication.service';
import { Router } from '@angular/router';
import { LoginDataShareService } from '../../login-module/login-data-share-service/login-data-service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

        lgData = {};
            constructor(
                private authentication: AuthenticationService,
                private router: Router,
                private loginData: LoginDataShareService,
                
            ) { }

  ngOnInit() {
      //this.lgData = this.loginData.getLgData();
      const dt = sessionStorage.getItem('username');
      const tk = sessionStorage.getItem('tkn');      
      console.log('User Name=', dt);
      console.log('User Name=', tk);
      


}

      
  

  signout() {
    this.authentication.logOut();
    this.router.navigate(['login']);
  }

}

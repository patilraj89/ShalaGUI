import { Component, OnInit } from '@angular/core';
import {HostConfigService} from '../../host-config-srvice/host-config-service';
import {ResourcesService} from '../../ResourcesService/resources-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AppSetting} from '../../AppSetting/AppSetting';
import {Resources} from '../../Resources/Resources';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router} from '@angular/router';
import {AuthenticationService} from  '../../Authentication/service/authentication.service';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

	hostAddress:string='';
    loginForm: FormGroup;
    submitted = false;
	result: any = null;
	
	  username = ''
	  password = ''
	  invalidLogin = false
  constructor(
	  private hostAddr:HostConfigService,
	  private formBuilder: FormBuilder,
	  private router:Router,
	  private resourceService:ResourcesService,
	  private spinnerService: Ng4LoadingSpinnerService,
	  private loginservice: AuthenticationService
	  ) { }

  ngOnInit() {
	  this.loginForm = this.formBuilder.group({
            // firstName: ['', Validators.required],
            // lastName: ['', Validators.required],
            uname: ['', [Validators.required]],
            passwd: ['', [Validators.required, Validators.minLength(6)]]
        });
  }

  	get f() { return this.loginForm.controls; }

	reset(){
        this.submitted = false;
        this.loginForm.reset();        
	}
	
	onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }else{
			// var uname=this.loginForm.controls['uname'].value;
			// var pass=this.loginForm.controls['passwd'].value;
			// if(uname==='abc@abc.com' && pass==='admin123'){
			// 	this.router.navigate(['/mpage']);
			// }
			
			this.username=this.loginForm.controls['uname'].value;
			this.password=this.loginForm.controls['passwd'].value;
			// console.log(this.loginForm.value);
			(this.loginservice.authenticate(this.username, this.password).subscribe(
      			data => {
        		this.router.navigate(['mpage'])
        		this.invalidLogin = false
      			},
      			error => {
        		this.invalidLogin = true

      		}));
			
		}

        //alert('SUCCESS!! :-)')
    }

}

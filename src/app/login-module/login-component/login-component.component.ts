import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Authentication/service/authentication.service';
import { LoginDataShareService } from '../login-data-share-service/login-data-service';

@Component({
    selector: 'app-login-component',
    templateUrl: './login-component.component.html',
    styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {


     lgnData = {};
    loginForm: FormGroup;
    submitted = false;
    result: any = null;

    username = '';
    password = '';
    invalidLogin = false;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private spinnerService: Ng4LoadingSpinnerService,
        private loginservice: AuthenticationService,
        private loginData: LoginDataShareService
    ) { }

    ngOnInit() {
        console.log('User in login ng on init=',sessionStorage.getItem('username'));
        console.log('Token login ng on init=',sessionStorage.getItem('tkn'));
        this.loginForm = this.formBuilder.group({
            // firstName: ['', Validators.required],
            // lastName: ['', Validators.required],
            uname: ['', [Validators.required]],
            passwd: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() { return this.loginForm.controls; }

    reset() {
        this.submitted = false;
        this.loginForm.reset();
    }
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        } else {

            this.spinnerService.show();
            this.username = this.loginForm.controls['uname'].value;
            this.password = this.loginForm.controls['passwd'].value;


            (this.loginservice.authenticate(this.username, this.password).subscribe(
                data => {
                    this.lgnData = data;
                    //console.log('Data=', JSON.stringify(this.lgnData));
                    //console.log('tkn=',this.lgnData['token']);
                    sessionStorage.setItem('username', this.username);
                    sessionStorage.setItem('tkn',this.lgnData['token']);
                    this.loginData.setLgData(data);
                    this.spinnerService.hide();
                    this.router.navigate(['mpage']);
                    this.invalidLogin = false;
                },
                error => {
                    this.spinnerService.hide();

                    if (error.status === 401) {
                        alert('User Name or Password incorrect');
                    }
                    if (error.status === 0) {
                        alert('Server is Down! Please try after some time');
                    }
                    console.log('error code=', error.status);
                    //console.log('err=', error);
                    this.invalidLogin = true;

                }));

        }

    }

}

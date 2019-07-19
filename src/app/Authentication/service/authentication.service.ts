import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map , catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HostConfigService } from '../../host-config-srvice/host-config-service';
export class User {
    constructor(
        public status: string,
    ) { }

}

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

     constructor(
        private httpClient: HttpClient,
        private host: HostConfigService
    ) { }

    authenticate(username: string, password: string) {

        const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
       const udetails  = {'username' : username , 'password' : password};
       //console.log('Details=', udetails);
        return this.httpClient.post(this.host.hostAddress() + 'token', udetails , httpOptions).pipe(
            map(
                userData => {
                    return userData;
                }
            )

        );
    }


    isUserLoggedIn() {
        const user = sessionStorage.getItem('username');
        const tkn = sessionStorage.getItem('tkn');
        console.log(!(user === null));
        return !(user === null && tkn === null);
    }

    logOut() {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('tkn');
    }
}

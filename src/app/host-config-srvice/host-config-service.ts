import {Injectable} from '@angular/core';
@Injectable({
    providedIn: 'root',
})

export class HostConfigService {

    constructor() {}

    hostAddress() {
        return 'http://localhost:8080/';
    }

}

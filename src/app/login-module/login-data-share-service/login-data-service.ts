import {Injectable} from '@angular/core';

@Injectable()
export class LoginDataShareService {
    private lgData = {};

    setLgData(dt: {}) {
        this.lgData = dt;
    }

    getLgData() {
        return this.lgData;
    }
}

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root',
})

export class ResourcesService{
    constructor(private http:Http){}


    /** Staff Resources */
    /*getDataObservable(url:string) {
        return this.http.get(url)
            .map(data => {
                data.json();
                // the console.log(...) line prevents your code from working 
                // either remove it or add the line below (return ...)
                console.log("I CAN SEE DATA HERE: ", data.json());
                return data.json();
        });
    }*/

    /** Staff Resources */
    getStaffId(url:string):Observable<any>{
        return this.http.get(url).pipe(map((data)=>{            
            return data;
        }));
    }

    saveStaffDetails(url:string,jsonForm):Observable<any>{
        return this.http.post(url,jsonForm).pipe(map((data)=>{
            return data;
        }))
    }

    getStaffDetails(url:string):Observable<any>{
        return this.http.get(url).pipe(map((data)=>{
            return data;
        }));
    }
}
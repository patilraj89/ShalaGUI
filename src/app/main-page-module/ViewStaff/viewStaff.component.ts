import {Component, OnInit} from '@angular/core';
import {HostConfigService} from '../../host-config-srvice/host-config-service';
import {ResourcesService} from '../../ResourcesService/resources-service';
import {AppSetting} from '../../AppSetting/AppSetting';
import {Resources} from '../../Resources/Resources';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector:'view-staff',
    templateUrl:'./viewStaff.component.html'
})

export class ViewStaff implements OnInit{    

    staffData=[];
    constructor(private hostAddr:HostConfigService,private resourceService:ResourcesService,
        private spinnerService: Ng4LoadingSpinnerService){}

    ngOnInit(){
        this.spinnerService.show();

        this.resourceService.getStaffDetails(AppSetting.API_HOST_ADDRESS+''+Resources.GET_STAFF).subscribe((res)=>{
            this.staffData=res.json();
            console.log(this.staffData);
            this.spinnerService.hide();
        })
    }    
    
    key: string = 'staffId'; //set default
        reverse: boolean = false;
        sort(key){
            this.key = key;
            this.reverse = !this.reverse;
        }
        p: number = 1;

        editStaff(rowData){
            console.log("Row Data=",rowData);
        }

        deleteStaff(id){
            alert(id);
        }

      /*games = [
        {
          "id":"1",
          "name": "DOTA 2",
          "genre": "Strategy"
        },
        {
          "id":"2",
          "name": "AOE 3",
          "genre": "Strategy"
        },
        {
          "id":"3",
          "name": "GTA 5",
          "genre": "RPG"
        },
        {
          "id":"4",
          "name": "Far Cry 3",
          "genre": "Action"
        },
        {
          "id":"5",
          "name": "GTA San Andreas",
          "genre": "RPG"
        },
        {
          "id":"6",
          "name": "Hitman",
          "genre": "Action"
        },
        {
          "id":"7",
          "name": "NFS MW",
          "genre": "Sport"
        },{
          "id":"8",
          "name": "Fifa 16",
          "genre": "Sport"
        },{
          "id":"9",
          "name": "NFS Sen 2",
          "genre": "Sport"
        },{
          "id":"10",
          "name": "Witcher Assasins on King",
          "genre": "Adventure"
        }
      ]*/

        
}
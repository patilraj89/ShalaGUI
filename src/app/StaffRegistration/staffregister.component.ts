import {Component,OnInit} from '@angular/core';
import {HostConfigService} from '../host-config-srvice/host-config-service';
import {ResourcesService} from '../ResourcesService/resources-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AppSetting} from '../AppSetting/AppSetting';
import {Resources} from '../Resources/Resources';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector:'staff-reg',
    templateUrl:'./staffregister.component.html'
})

export class StaffRegistration implements OnInit{
    
    hostAddress:string='';
    register: FormGroup;
    isSubmitted: boolean = false;
    result: any = null;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    mobilePattern=/^\+?\d{10}$/;
    staffData:any[] = [];
    staffDataResponse;
    dataSaveStatus=false;
    

    /** it checks internet connectivity in system */
    public onlineOffline: boolean = false;

    constructor(private hostAddr:HostConfigService,private frmBuilder: FormBuilder,private resourceService:ResourcesService,
        private spinnerService: Ng4LoadingSpinnerService){
        
        this.hostAddress=this.hostAddr.hostAddress();
        this.onlineOffline=navigator.onLine;

    }   

    ngOnInit(){
        
        this.register = this.frmBuilder.group({
            fname:["", [Validators.required]],
            mname:[""],
            staffid:[""],
            lname:["", [Validators.required]],
            mno:["", [Validators.required,Validators.pattern(this.mobilePattern)]],
            email:['', [Validators.required, Validators.pattern(this.emailPattern)]],
            edu:["", [Validators.required]],
            gender:["",[Validators.required]],
            dob:["",[Validators.required]],
            doj:["",[Validators.required]],
            address:["",[Validators.required]]       
          });

          this.getStaffId();
          //console.log(AppSetting.API_HOST_ADDRESS+Resources.LAST_STAFF_CREATED);
         
    }

        getStaffId(){        
          this.resourceService.getStaffId(AppSetting.API_HOST_ADDRESS+''+Resources.LAST_STAFF_CREATED).subscribe((res:any)=>{
            this.staffData=res.text();
            //console.log(res.text());
          });

        }

    

    get staffid(){return this.register.get('staffid');}
    get fname() { return this.register.get('fname'); }
    get mname() { return this.register.get('mname'); }
    get lname() { return this.register.get('lname'); }
    get mno() { return this.register.get('mno'); }
    get email(){return this.register.get('email');}
    get edu(){return this.register.get('edu');}
    get gender(){return this.register.get('gender');}
    get dob(){return this.register.get('dob');}
    get doj(){return this.register.get('doj');}
    get address(){return this.register.get('address');}

    

    save(){
        
        alert('Save called');
        this.isSubmitted = true;
        if(!this.register.valid){
            return;
        }else{

            this.spinnerService.show();
            //alert('Save called after all validations');
            this.resourceService.saveStaffDetails(AppSetting.API_HOST_ADDRESS+''+Resources.SAVE_STAFF,this.register.value).
            subscribe(staffResponse=>{
                this.staffDataResponse=staffResponse.text();
                this.dataSaveStatus=true;
                //console.log(this.staffDataResponse);
                this.isSubmitted = false;
                this.register.reset();
                this.getStaffId();
                this.spinnerService.hide();
            });
        }      
        
    }

    reset(){
        this.isSubmitted = false;
        this.register.reset();
        this.getStaffId();
    }  
    
      
}
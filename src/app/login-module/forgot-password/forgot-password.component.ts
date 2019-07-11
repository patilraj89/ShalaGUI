import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

	forgotPassForm: FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
	  this.forgotPassForm = this.formBuilder.group({
            // firstName: ['', Validators.required],
            // lastName: ['', Validators.required],
            uname: ['', [Validators.required]]
            
        });
  }

  get f() { return this.forgotPassForm.controls; }

  onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.forgotPassForm.invalid) {
            return;
        }else{
			var uname=this.forgotPassForm.controls['uname'].value;			
			console.log(this.forgotPassForm.value);
		}

        alert('SUCCESS!! :-)')
    }

}

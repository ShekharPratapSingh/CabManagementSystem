import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BackendService } from '../../../services/backend.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  account: FormGroup;
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  constructor(
    private fb: FormBuilder,
    private nodeservice: BackendService,
    private router:Router,
    private toastr:ToastrService
  ) { 
    this.account = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phonenumber:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  signup(account) {
    this.nodeservice.createEmployees(account.value).subscribe(emp => {
      if (emp) {
        console.log(emp);
        this.router.navigate(['/admin/login']);
        this.toastr.success('Sucessfully created')
      } else {
        this.toastr.warning('profile not created')
      }
      
    });
  }


  ngOnInit(): void {
  }

  

}

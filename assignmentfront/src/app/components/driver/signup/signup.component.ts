import { UserService } from './../../../shared/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService]
})
export class SignupComponent implements OnInit {

  account: FormGroup;
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private router:Router,
    private toastr:ToastrService
  ) { 
    this.account = fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['',Validators.required]
      
    });
  }
  ngOnInit(): void {
    
  }

  signup(account) {
      this.userService.postUser(account.value).subscribe(
        res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 4000);
          this.resetForm(account);
        },
        err => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          }
          else
            this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        }
      );
    }
  
    resetForm(account) {
      this.userService.selectedUser = {
        fullName: '',
        email: '',
        password: ''
      };
      account.resetForm();
      this.serverErrorMessages = '';
    }
  
  }

  


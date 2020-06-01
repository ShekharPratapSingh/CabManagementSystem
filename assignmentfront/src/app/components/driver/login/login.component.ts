import { ConnectService } from './../../../services/connect.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account: FormGroup;
  emps: any = [];
  datas: any = [];
  email: string;
  phonenumber;
  constructor(
    private fb: FormBuilder,
  
    private router: Router,
    private toastr: ToastrService,
    private connect:ConnectService
  ) {
    this.account = fb.group({
      
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    
  }
  // login(account) {
  //   this.nodeservice.getEmployees().subscribe(emp => {
  //     emp.map(data => {
  //       this.emps.push(data.phonenumber)
  //       this.emps.forEach(element => {
  //         if (element === account.value.phonenumber) {
  //           this.datas.push(data)
  //           this.toastr.success('Sucessfully logged in')
  //           this.router.navigate(['/driver/profile']);
  //           this.connect.myMethod(this.datas)
  //           console.log(this.datas);
            
  //         } else {
  //           this.router.navigate(['/driver/login']);
  //           this.toastr.warning('Enter valid Unique Number')
           
  //         }
          
         
  //       })
  //     })
  //     console.log(account.value)
    

  //   }) }
 
}

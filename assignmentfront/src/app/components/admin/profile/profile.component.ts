import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { Router } from '@angular/router';
import { ConnectService } from './../../../services/connect.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  employees = [];
  updatedemp = [];
  record:String;
  constructor(private nodeservice: BackendService, private router: Router, private connect: ConnectService) {

    this.connect.myMethod$.subscribe((data) => {
      this.record = data;
      console.log(typeof (this.record))// And he have data here too!
    });


    this.nodeservice.getEmployees().subscribe(emp => {
      this.employees = emp;
     
      this.updatedemp = this.employees.filter(item => item.phonenumber !== this.record);
 
    
    })
  }
  delete(_id:String) {
    if (confirm('Are you sure want to delete this record?') == true) {
      this.nodeservice.deletedata(_id).subscribe(res => {
        console.log(res)
        
      }
    )
    }
  }
  logout() {
    this.router.navigate(['/admin/login']);
  }
  ngOnInit(): void {
   
  }
}

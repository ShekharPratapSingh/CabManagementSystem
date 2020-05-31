import { ConnectService } from './../../../services/connect.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName: string;
  emailid: string;
  phonenumber: string;
 

   datas: Array<any> 

    public constructor(private connect:ConnectService,private router:Router) {
        this.connect.myMethod$.subscribe((data) => {
          this.datas = data; 
          this.datas.map(name => {
            this.firstName = name.firstname;
            this.emailid = name.email;
            this.phonenumber=name.phonenumber
            console.log(this.firstName)
            console.log(this.emailid)
          })
            }
        );
    }
  logout() {
    this.router.navigate(['/driver/login']);
    }
  ngOnInit(): void {
    
  }

}

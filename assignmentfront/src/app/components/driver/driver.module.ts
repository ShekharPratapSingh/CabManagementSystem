import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { DriverComponent } from './driver.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: '', component: DriverComponent,
    children: [
          {path:'',redirectTo:'login',pathMatch:'full'},
            { path: 'login',component: LoginComponent },
      { path: 'signup', component: SignupComponent },
            {path:'profile',component:ProfileComponent}
    ]}
]

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    DriverComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
      CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DriverModule { }

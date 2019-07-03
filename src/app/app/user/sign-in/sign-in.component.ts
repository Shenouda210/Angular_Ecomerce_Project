import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/app/Shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(protected userServ:UserService,private route: Router) { }
isLoginError:boolean=false;
  ngOnInit() {
    this.resertForm();
  }
  resertForm(from?: NgForm)
  {
    if(from != null) {
    from.resetForm();
    }

    this.userServ.formData ={
       Email:"",
       Password:"",
       ConfirmPassword: ""
 };

  }

  onSubmit(form: NgForm)
  {
    console.log(form.value.Email);
    console.log(form.value.Password);
    this.userServ.userAuthentication(form.value.Email, form.value.Password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      this.route.navigate(['/Admin/home']);
    },
    (err: HttpErrorResponse) => {
        this.isLoginError = true;
    });
  
  }
  goRegister(){
    this.route.navigate(['/signup'])
  }
}


import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/app/Shared/user';
import { UserService } from 'src/app/app/Shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(protected userServ: UserService) { }

  ngOnInit() {
    this.resertForm();
  }
  resertForm(from?: NgForm) {
    if (from != null) {
      from.resetForm();
    }

    this.userServ.formData = {
      Email: "",
      Password: "",
      ConfirmPassword: ""
    };

  }
  onSubmit(form: NgForm) {

    this.insertRecord(form);//sent object of employee from form to insert record


  }

  insertRecord(form: NgForm)//sent object of employee from insertrecord to service
  {
    return this.userServ.postUser(form.value).subscribe((res) => {
      console.log(res)
      // this.resertForm(form)

    });


  }

}

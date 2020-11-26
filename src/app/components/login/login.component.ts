import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiAuthService } from 'src/app/Service/api-auth.service';
import { LoginForm } from '../Models/LoginForm.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fg : FormGroup

  constructor(
    private _authService : ApiAuthService,
    private _builder : FormBuilder
  ){
  }

  ngOnInit(){
      this.fg = this._builder.group({
        email : ['guy.vilain1@gmail.com', [Validators.required, Validators.email]],
        password : ['testeur', [Validators.required]]
      })
  }

  onSubmit(){
    // var formData : any = new FormData()
    // formData.append("email", this.fg.get('email').value);
    // formData.append("password", this.fg.get('password').value);


    const loginInfo = new LoginForm()
    const formValues = this.fg.value
    loginInfo.email = formValues['email']
    loginInfo.passwd = formValues['password']

    console.log(loginInfo)
    this._authService.login(loginInfo);
    
  }





}

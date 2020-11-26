import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { disconnect } from 'process';
import { LoginForm } from '../components/Models/LoginForm.model';
import { RegisterForm } from '../components/Models/RegisterForm.model';
import { User } from '../components/Models/User.model';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  private URL = "http://locahost:44379/api/"
  currentUser : User

  constructor(

    private _httpClient : HttpClient
  ) { }

  login(loginInfo : LoginForm){
      this._httpClient.post<User>(this.URL+'Auth/Login', loginInfo ).subscribe({
      next: (userApi : User) => {
        this.currentUser = userApi
        sessionStorage.setItem("token", this.currentUser.token)
        console.log("login ok: " + this.currentUser)
      }
      ,
      error : (error) => console.log(error)
    })
  }

  register(newUser : RegisterForm){
    return this._httpClient.post(this.URL+'auth/register', newUser).subscribe({
      next : ()=> console.log('Register ok'),
      error : (error)=> console.log(error)
    })
  }

  deconnexion(){
    return null
  }
}

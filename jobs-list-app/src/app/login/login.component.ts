import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailLogin:string = '';
  passLogin:string = '';
  nameSignUp:string = '';
  emailSignUp:string = '';
  passSignUp:string = '';
  typeSignUp:string = 'Seeker';
  constructor(private _router: Router, private fauth: AuthService) { }
  
  ngOnInit() {
  }
  login(){
    //login with firebase auth
    if(this.emailLogin != '' && this.passLogin != '')
    {
      this.fauth.doLogin({'email' : this.emailLogin, 'password' : this.passLogin})
      this._router.navigateByUrl('');
    }
  }
  signup(){
    //signup and push data to firebase
    if(this.emailSignUp != '' && this.nameSignUp != '')
    {
      this.fauth.doRegister({'name' : this.nameSignUp, 'email' : this.emailSignUp, 'password' : this.passSignUp, 'type': this.typeSignUp});
      this._router.navigateByUrl('');
    }
  }
}
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  UserCollection: JSON;
  isLoggedIn = false;
  public loggedInUser: string;
  errorMsg: string;
  constructor(private router: Router, private firebaseService: FirebaseService) { }

  loginSubmit() {
    // this.isLoggedIn.emit(true);
    console.log(this.loginForm.value);
    this.UserCollection = this.firebaseService.getUsers();
    console.log(this.UserCollection);

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < 2; i++) {
      console.log(this.UserCollection[i].uid);
      if ((this.loginForm.value.Username === this.UserCollection[i].uid) && (this.loginForm.value.Password === 'admin') ){
        this.isLoggedIn = true;
      }

    }
    if (this.isLoggedIn === true) {
      this.loggedInUser = this.loginForm.value.Username;
      this.router.navigate(['/dashboard/' + this.loginForm.value.Username ] );
    } else {
      this.errorMsg = 'Wrong Login Credentials';
    }

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      Username : new FormControl(''),
      Password : new FormControl('')
    });
  }

}


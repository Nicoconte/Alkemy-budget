import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';  

import { UserService } from '../../service/user.service';
import { LocalStorageService } from "../../service/local-storage.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private username : String;
  private email : String;
  private password : String;

  constructor(private userService : UserService, private localStorageService : LocalStorageService, private router : Router) { }

  ngOnInit(): void {
    if (this.userService.isAuthenticated()) {
      this.router.navigate(['/home/preview'])
    }
  }

  userForm = new FormGroup({
    username : new FormControl("", [
      Validators.required,
      Validators.min(5)
    ]),
    email : new FormControl("", [
      Validators.required
    ]),
    password : new FormControl("", [
      Validators.required,
      Validators.min(8)
    ])
  })


  public register() {

    this.username = this.userForm.value.username;
    this.email = this.userForm.value.email;
    this.password = this.userForm.value.password;

    let body = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password
    }

    this.userService.addUser(body).subscribe(res => {
      this.localStorageService.set('token', res.key)
      this.localStorageService.set('username', res.username);
      
      if (this.localStorageService.get('token') !== null) 
        return this.router.navigate(['/home/preview'])
    })

  }

}

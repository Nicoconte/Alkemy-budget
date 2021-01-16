import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router' 

import { UserService } from '../../service/user.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username : String;
  private password : String;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {

    if (this.userService.isAuthenticated()) {
      //this.router.navigate(["/home/preview"])
    }
  }

  userForm = new FormGroup({
    username : new FormControl("", [
      Validators.required,
    ]),
    password : new FormControl("", [
      Validators.required,
    ])
  })


  public login() {
    this.username = this.userForm.value.username;
    this.password = this.userForm.value.password; 
         
    let body = {
      "username" : this.username,
      "password" : this.password
    }

    this.userService.authUser(body, 'auth/').subscribe(res => { 
      sessionStorage.setItem('token', res.key)
      if (sessionStorage['token'] !== null) {
        this.router.navigate(['/home/preview']);
      }
    
    }, (error) => {
      alert("Invalid credentials")
      this.userForm.reset()
    })
  }

}

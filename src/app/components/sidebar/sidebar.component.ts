import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {}
  
  public logout() {
    console.log("Token al cerrar sesion => " + sessionStorage['token'])
    alert("Cerrando sesion");

    sessionStorage.removeItem('token')
    sessionStorage.clear()

    this.router.navigate(['/sign-in'])

  }
    


}

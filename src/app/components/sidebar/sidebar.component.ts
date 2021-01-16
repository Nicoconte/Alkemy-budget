import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from "../../service/local-storage.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router : Router, private localStorageService : LocalStorageService) { }

  ngOnInit(): void {}
  
  public logout() {
    return new Promise((resolve) => {
      alert("Closing session")
      setTimeout(() => {
        resolve(this.localStorageService.destroy());
      }, 800)
    }).then(() => {
      this.router.navigate(['/sign-in'])
    })
  }
    


}

import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username : String;

  constructor(private localStorageService : LocalStorageService) { }

  ngOnInit(): void {
    this.username = this.localStorageService.get('username');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl : String = "/alkemy-budget/api/v1/users"

  constructor(private http : HttpClient, private localStorageService : LocalStorageService) { }

  public authUser(params : any, url : any) {
    return this.http.post<any>(`${this.baseUrl}/${url}`, params);
  }

  public addUser(params : any) {
    return this.http.post<any>(`${this.baseUrl}/`, params);
  }

  public isAuthenticated() {
    return this.localStorageService.get('token') === null ? false : true;
  }

}
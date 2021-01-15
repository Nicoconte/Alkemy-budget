import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl : String = "/alkemy-budget/api/v1/users"

  constructor(private http : HttpClient) { }

  public authUser(params : any, url : any) {
    return this.http.post<any>(`${this.baseUrl}/${url}`, params);
  }

  public addUser(params : any) {
    return this.http.post<any>(`${this.baseUrl}/`, params);
  }

  public isAuthenticated() {
    return localStorage.getItem('token') === null ? false : true;
  }

}

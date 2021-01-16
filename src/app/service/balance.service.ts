import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private baseUrl : String = "/alkemy-budget/api/v1/balance/";
  
  private token : String = localStorage.getItem('token');

  constructor(private http : HttpClient) { }

  public getBalance() {
    return this.http.get<any>(`${this.baseUrl}`, {
      headers : new HttpHeaders({
        "Authorization" : `Token ${this.token}`
      })
    });
  }

}

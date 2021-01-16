import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private baseUrl : String = "/alkemy-budget/api/v1/balance/";
  
  private token : String = sessionStorage['token'];

  constructor(private http : HttpClient) { }

  public getBalance() {
    console.log("Token en el servicio de balance => " + this.token)
    return this.http.get<any>(`${this.baseUrl}`, {
      headers : new HttpHeaders({
        "Authorization" : `Token ${this.token}`
      })
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private baseUrl : String = "/alkemy-budget/api/v1/balance/";
  
  constructor(private http : HttpClient, private localStorageService : LocalStorageService) { }

  public getBalance() {
    return this.http.get<any>(`${this.baseUrl}`, {
      headers : new HttpHeaders({
        "Authorization" : `Token ${this.localStorageService.get('token')}`
      })
    });
  }

}

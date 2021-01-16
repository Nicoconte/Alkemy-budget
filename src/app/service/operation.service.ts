import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'

import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private baseUrl : String = "/alkemy-budget/api/v1/operations";
  
  constructor(private http : HttpClient, private localStorageService : LocalStorageService) { }

  public listOperations() {
    return this.http.get<any>(`${this.baseUrl}/all`, { headers : new HttpHeaders({ "Authorization" : `Token ${this.localStorageService.get('token')}`}) })
  }

  public listLatestOperations() {
    return this.http.get<any>(`${this.baseUrl}/latest/`, { headers : new HttpHeaders({ "Authorization" : `Token ${this.localStorageService.get('token')}` }) })
  }

  public saveOperation(params : any) {
    return this.http.post<any>(`${this.baseUrl}/`, params, { headers : new HttpHeaders({ "Authorization" : `Token ${this.localStorageService.get('token')}` }) });
  }

  public deleteOperation(id : any) {
    return this.http.delete<any>(`${this.baseUrl}/${id}/remove/`, { headers : new HttpHeaders({ "Authorization" : `Token ${this.localStorageService.get('token')}` }) });
  }

}

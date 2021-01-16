import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http : HttpClient) { }

  private baseUrl : String = "/alkemy-budget/api/v1/operations";
  private token : String = sessionStorage['token'];

  public listOperations() {
    console.log("Token al pedir todas las operaciones => " + this.token)
    return this.http.get<any>(`${this.baseUrl}/all`, { headers : new HttpHeaders({ "Authorization" : `Token ${this.token}` }) })
  }

  public listLatestOperations() {
    console.log("Token al pedir todas las operaciones => " + this.token)
    return this.http.get<any>(`${this.baseUrl}/latest/`, { headers : new HttpHeaders({ "Authorization" : `Token ${this.token}` }) })
  }

  public saveOperation(params : any) {
    console.log(`Token ${this.token}`)
    return this.http.post<any>(`${this.baseUrl}/`, params, { headers : new HttpHeaders({ "Authorization" : `Token ${this.token}` }) });
  }

  public deleteOperation(id : any) {
    return this.http.delete<any>(`${this.baseUrl}/${id}/remove/`, { headers : new HttpHeaders({ "Authorization" : `Token ${this.token}` }) });
  }

}

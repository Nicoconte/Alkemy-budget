import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public set(key : any, value : any) {
    localStorage.setItem(key, value);
  }

  public get(key : any) {
    return localStorage.getItem(key);
  }

  public remove(key : any) {
    return window.localStorage.removeItem(key);
  }

  public destroy() {
    return window.localStorage.clear();
  }

}

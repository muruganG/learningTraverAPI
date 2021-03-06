import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebStoreService {

  get(key:string):string | null{
    return window.localStorage.getItem(key);
  }
  set(key:string,value:string):void{
    window.localStorage.setItem(key,value);
  }
}

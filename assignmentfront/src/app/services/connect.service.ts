import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  myMethod$: Observable<any>;
  private myMethodSubject = new BehaviorSubject<any>("");
  constructor() { this.myMethod$ = this.myMethodSubject.asObservable(); }
  myMethod(data) {
    console.log(data); 
    this.myMethodSubject.next(data);
  
}
}

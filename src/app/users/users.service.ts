import { Injectable } from '@angular/core';
import { Observable, Subscriber, interval } from 'rxjs';
export interface User{
  id: number,
  name:string
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
getCounter() : Observable<number>{
return interval(1000);
}

  getUsers(): Observable<User[]>{
  return new Observable((subscriber)=> {
    subscriber.next([
      {
        id:1,
        name:"eze"
      },
      {
        id:2,
        name:"Nicolas"
      },
      {
        id:3,
        name:"Camila"
      }
    ]

    );
  });
  }
}

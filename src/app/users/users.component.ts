import { Component, OnDestroy } from '@angular/core';
import { User, UsersService } from './users.service';
import { Observable, Subscription, first, map, take } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnDestroy{
  users$ : Observable<User[]>;
  counter = 0;
  counterSubscription : Subscription;
 // users:User[] = [];
constructor(private usersService:UsersService){
  this.users$ = this.usersService.getUsers();
  this.counterSubscription = this.usersService.
  getCounter()
  .pipe(
    //first(),
    take(10),
  map((v) => v * 2),
  )
  .subscribe({
  next : (v)=>{
      console.log(v);
      this.counter = v;
    }
  })

  
}
ngOnDestroy(): void {
  this.counterSubscription.unsubscribe();
}
}



  /*this.usersService.getUsers().subscribe({
    next:(v) =>{
      console.log(v)
      this.users =v;
    },
    error: ()=>{},
    complete: ()=>{},
  });

}
*/
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from './users/models/user.model';
import { UserService } from './users/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  eventEmitterUsers: Array<User> = [];

  // User service
  userServiceUsers: Array<User> = [];
  userAddedSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userServiceUsers = this.userService.users;
    this.userAddedSubscription = this.userService.usersUpdated
      .subscribe((users: Array<User>) => {
        this.userServiceUsers = users;
      });
  }

  ngOnDestroy(): void {
    this.userAddedSubscription.unsubscribe();
  }

  onUserSubmittedWithEventEmitter(user: User): void {
    this.eventEmitterUsers.push(user);
  }
}

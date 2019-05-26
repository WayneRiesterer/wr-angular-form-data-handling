import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from './models/user.model';

@Injectable()
export class UserService {
  users: Array<User> = [];

  usersUpdated = new Subject<User[]>();

  addUser(user: User): void {
    this.users.push(user);
    this.usersUpdated.next([...this.users]);
  }
}
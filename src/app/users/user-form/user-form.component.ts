import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  // Use this to emit the user data as a payload to the parent
  @Output() userDataSubmitted = new EventEmitter<User>();

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [undefined, [Validators.required]],
      age: [undefined, [Validators.required, Validators.min(1)]],
      gender: [undefined, [Validators.required]]
    })
  }

  submitWithEventEmitter(): void {
    this.userDataSubmitted.emit(this.form.value);
  }

  submitWithService(): void {
    this.userService.addUser(this.form.value);
  }
}
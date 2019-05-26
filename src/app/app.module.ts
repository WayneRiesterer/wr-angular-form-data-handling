import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserService } from './users/user.service';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, UserFormComponent],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {}

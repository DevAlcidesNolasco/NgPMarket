import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  authError: any;
  user: User;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = new User("", "", "", "");
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

}

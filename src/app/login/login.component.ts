import { Component, OnInit } from '@angular/core';
import { AuthGService } from '../auth/auth-g.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {  

  constructor(
    public auth: AuthGService
  ) { }

  ngOnInit() {
  }
  //[(ngModel)]="user.password" [ngModelOptions]="{standalone: true}"
}

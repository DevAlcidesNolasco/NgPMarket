import { Component, OnInit } from '@angular/core';
import { AuthGService } from '../auth/auth-g.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    public auth: AuthGService
  ) {
  }
  ngOnInit() {

  }
}

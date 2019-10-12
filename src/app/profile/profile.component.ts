import { Component, OnInit } from '@angular/core';
import { AuthGService } from '../auth/auth-g.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    public auth: AuthGService
  ) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public search: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchArticle(){
    console.log(this.search);
    this.router.navigate([`search/${this.search}`]);
  }
}

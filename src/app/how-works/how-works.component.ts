import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-how-works',
  templateUrl: './how-works.component.html',
  styleUrls: ['./how-works.component.scss']
})
export class HowWorksComponent implements OnInit {
  //user: User;  
  constructor() {}

  ngOnInit() {
  }
  scrollDown() {
    console.log("Se scrolleo para abajo");
    var elmnt = document.getElementById("banner");
    elmnt.scrollIntoView();
  }
  addComment() {
    console.log("envio mensaje");
  }
  
}

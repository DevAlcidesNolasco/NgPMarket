import { Component, OnInit } from '@angular/core';
//import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Comment } from '../models/comment';
//import { Observable, of } from 'rxjs';
//import { AuthGService } from '../auth/auth-g.service';
//import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-how-works',
  templateUrl: './how-works.component.html',
  styleUrls: ['./how-works.component.scss']
})
export class HowWorksComponent implements OnInit {
  //user: User;
  lista: Comment[];
  constructor(
    public comments: CommentsService
  ) {    

  }

  ngOnInit() {
    //this.auth.user$.subscribe(user => {
    //this.user = user;
    //});
    this.getComments();
  }
  scrollDown() {
    console.log("Se scrolleo para abajo");
    var elmnt = document.getElementById("banner");
    elmnt.scrollIntoView();
  }
  addComment() {

  }
  async getComments (){
    await this.comments.comments$.subscribe(comments => {
      this.lista = comments;
      console.log(this.lista);
    });
  }
}

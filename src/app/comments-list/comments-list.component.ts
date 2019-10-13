import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  lista: Comment[];
  constructor(
    public comments: CommentsService
  ) { }

  ngOnInit() {
    this.getComments();
  }
  async getComments() {
    await this.comments.comments$.subscribe(comments => {
      this.lista = comments;
      //console.log(this.lista);
    });
  }
}

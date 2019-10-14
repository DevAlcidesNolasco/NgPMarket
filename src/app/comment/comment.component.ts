import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';
import { AuthGService } from '../auth/auth-g.service';
import { User } from '../models/user';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  public comentario: Comment = new Comment("", null, "", "");
  public user: User;
  constructor(
    public auth: AuthGService,
    public comments: CommentsService
  ) {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.user = user;
        this.comments.getMyComment(this.user.uid).subscribe(comment => {
          if (comment) {
            this.comentario = comment;
          } else {
            this.comentario = new Comment("", null, "", "");
          }
        });
      }
    });
  }
  ngOnInit() {
  }
  submitComment() {
    const date = new Date;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateToSubmit = `${day}/${month}/${year}`;
    this.comentario.date = dateToSubmit;
    this.comentario.displayName = this.user.displayName;
    console.log(this.comentario);
    this.comments.updateComment(this.user.uid, this.comentario);
  }

}

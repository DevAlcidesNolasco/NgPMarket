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
  public comentario: Comment;
  user: User;
  constructor(
    public auth: AuthGService,
    public comments: CommentsService
  ) { }

  ngOnInit() {
    this.comentario = new Comment("", 0, "", "");
    this.auth.user$.subscribe(user => {
      if (user) {
        this.user = user;
        this.comments.getMyComment(this.user.uid).subscribe(comment => {
          this.comentario = comment;
        });
      }
    });    
  }
  submitComment() {
    const date = new Date;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateToSubmit = `${day}/${month}/${year}`;
    this.comentario.date = dateToSubmit;
    this.comments.updateComment(this.comentario);
    this.comentario = new Comment(this.user.uid, 0, "", this.user.displayName, "");
  }

}

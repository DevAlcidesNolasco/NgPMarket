import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments$: Observable<Comment[]>;
  constructor(
    private afs: AngularFirestore
  ) {
    let commentsCollection: AngularFirestoreCollection<Comment>;
    commentsCollection = afs.collection<Comment>(`Comments/`);
    this.comments$ = commentsCollection.valueChanges();
  }
  updateComment(uid: string, { displayName, rating, date, comment }: Comment) {
    let commentRef = this.afs.doc<Comment>(`Comments/${uid}`);
    const data = {
      displayName, 
      rating, 
      date, 
      comment
    }
    return commentRef.set(data);
  }
  getMyComment(uid: string) {
    let commentRef: AngularFirestoreDocument<Comment> = this.afs.doc<Comment>(`Comments/${uid}`);
    return commentRef.valueChanges();
  }
}



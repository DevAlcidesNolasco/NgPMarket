import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  commentsCollection: AngularFirestoreCollection<Comment>;
  comments$: Observable<Comment[]>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.commentsCollection = afs.collection<Comment>(`Comments/`);
    this.comments$ = this.commentsCollection.valueChanges();
  }
  updateComment({uid, date, rating, displayName, comment}: Comment){
    const commentRef: AngularFirestoreDocument<Comment> = this.afs.doc(`Comments/${uid}`);    
    const data = {
      uid,
      date,
      displayName,
      comment,
      rating
    }
    return commentRef.set(data, {merge: true});
  }
  getMyComment(uid:string){
    const commentRef: AngularFirestoreDocument<Comment> = this.afs.doc(`Comments/${uid}`);   
    return commentRef.valueChanges();
  }
}



import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

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
}



import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthGService {
  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {          
          return this.afs.doc<User>(`Users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(["/"]);
  }

  updateUserData({uid,email, displayName, photoURL}: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`Users/${uid}`);
    const data = {
      uid,
      email,
      displayName,
      photoURL
    }
    return userRef.set(data, {merge: true});
  }
}

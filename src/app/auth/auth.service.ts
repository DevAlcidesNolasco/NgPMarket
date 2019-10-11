import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  newUser: any;
  private eventAuthError = new BehaviorSubject<string>('');
  eventAuthError$ = this.eventAuthError.asObservable();
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }
  createUser(user){
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(userCredencials => {
      this.newUser = user;
      userCredencials.user.updateProfile({
        displayName: user.firstName + " " + user.lastName
      });
      this.insertUserData(userCredencials).then((data) => {
        console.log(data);
      });
    }).catch(err => {
      this.eventAuthError.next(err);
    });
  }
  insertUserData(userCredencials: firebase.auth.UserCredential){
    return this.db.database.ref(`Users/${userCredencials.user.uid}`).set({
      email: this.newUser.email,
      firstName: this.newUser.firstName,
      lastName: this.newUser.lastName
    })
  }
}

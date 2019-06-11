import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user: any;
  usersObservable: Observable<any[]>;
  constructor(public afs: AngularFirestore, public db: AngularFireDatabase) {
    this.afs = afs;
    this.db = db;
    this.usersObservable = db.list('/users').valueChanges();
    this.usersObservable.subscribe(item => {
      return this.fetchUsers(item);
     });
   }

  getUsers() {
    return this.user;
  }

  getUserById(id) {
    return this.user.filter(x => x.uid === id);
  }

  fetchUsers(user) {
    this.user = user;
  }

}

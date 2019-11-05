import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products$: Observable<Product[]>
  constructor(
    private afs: AngularFirestore
  ) {
    let prodcuts: AngularFirestoreCollection<Product> = this.afs.collection(`Products`, ref => ref.orderBy("name"));
    this.products$ = prodcuts.valueChanges(["added", "removed"]);
  }
}

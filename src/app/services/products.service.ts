import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products$: Observable<Product[]>;
  constructor(
    private afs: AngularFirestore
  ) {
  }
  search(search: string) {
    let prodcuts: AngularFirestoreCollection<Product> = this.afs.collection<Product>(`Products`, ref => ref.where("key_words", "array-contains", search));
    this.products$ = prodcuts.valueChanges();
  }
  addProduct(producto: Product){
  const id = this.afs.createId();
  let prodcuts: AngularFirestoreCollection<Product> = this.afs.collection<Product>(`Products`);  
  prodcuts.doc(id).set(producto);
  return id;
}
}

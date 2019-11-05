import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  producto: any;
  searchedProducts: Observable<any[]>;
  productList: any[];
  constructor(
    private route: ActivatedRoute,
    private afs: AngularFireDatabase,
    public prd: ProductsService
  ) {    
    this.producto = this.route.snapshot.params.producto;
    console.log(this.producto);
    this.prd.products$.subscribe(pprds => {
      console.log(pprds);
    });
    //var productsCollection = this.afs.list(`Products/`, ref => ref.orderByChild('name').startAt(this.producto));
    //this.searchedProducts = productsCollection.valueChanges();
    //this.searchedProducts.subscribe((prod) => {
      //this.productList = prod;
    //});
  }

  ngOnInit() {
  }

}

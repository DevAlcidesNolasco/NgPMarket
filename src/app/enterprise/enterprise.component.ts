import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss']
})
export class EnterpriseComponent implements OnInit {
  public product: Product = new Product("", [], 0, "", [], "");
  public idProduct: string; 
  constructor(
    private prodService: ProductsService
  ) { }

  ngOnInit() {
    console.log(this.product);
  }
  create(){
    this.idProduct = this.prodService.addProduct(Object.assign({}, this.product));
    console.log(this.idProduct);
  }
  saveProduct(){
    console.log(this.idProduct);
  }

}

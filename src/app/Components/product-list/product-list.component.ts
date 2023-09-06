import { Component, OnInit, OnChanges } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  ngOnInit(): void {
      //call api
      console.log('oninit')
  }
  
  ngOnChanges(){
    console.log('ngOnChanges')
  }

  constructor(
    private ProdServ:ProductService
  ){
    // initilzation for data (props)
    console.log('constructor')
    this.Products = this.ProdServ.Products

  }
  Products :Product[];
  date = new Date();

}

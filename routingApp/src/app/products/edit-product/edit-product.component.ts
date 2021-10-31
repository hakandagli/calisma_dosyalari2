import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/products';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  selectedProduct:any;
  constructor(
    private route:ActivatedRoute,
 
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params=>{
        let id = Number(params.get('id'));
        this.selectedProduct=products.find(i=>i.id===id);
      })
  }

}

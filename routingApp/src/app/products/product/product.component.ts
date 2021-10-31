import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  

  constructor(
    private route:ActivatedRoute
  ) { }
  selectedProduct:any;
  ngOnInit(): void {
    //let id= Number(this.route.snapshot.paramMap.get('id'));           
   // this.selectedProduct=products.find(i=>i.id===id);

   this.route.paramMap
    .subscribe(params=>{
      let id = Number(params.get('id'));
      this.selectedProduct=products.find(i=>i.id===id);
    })
  }

}

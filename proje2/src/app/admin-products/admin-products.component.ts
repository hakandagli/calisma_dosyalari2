import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent  {

  products;
  model:ProductRepository;
  selectedProduct:Product | any;

  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
   }

   getSelected(product: Product): boolean{
    return product==this.selectedProduct;
   }

   editProduct(product:Product){
     this.selectedProduct=product;
   }


   saveChanges(){
     const p = this.model.getProductById(this.selectedProduct.id);
     p.name=this.selectedProduct.name;
     p.price=this.selectedProduct.price;
     p.imageUrl=this.selectedProduct.imageUrl;
     p.description=this.selectedProduct.description;
     this.selectedProduct=null;
   }
}

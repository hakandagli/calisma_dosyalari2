import { Component, NgModule } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Product } from './product.model';
import { ProductRepository } from './repository.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model:ProductRepository = new ProductRepository();
  
  //JSON OBJESİ HAKKINDA BİLGİ
  newProduct:Product = new Product();
  get jsonProduct(){
    return JSON.stringify(this.newProduct);
  }
  addProduct(p: Product){
    console.log("New Product: " + this.jsonProduct);
  }

  formSubmitted:boolean=false;
  submitForm(form:NgForm){
    this.formSubmitted=true;
    if(form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct=new Product();
      form.reset();
      this.formSubmitted=false;
    }
  }

  getFormValidationErrors(form:NgForm):string[]{
    let messages: string[]=[];
    Object.keys(form.controls).forEach(k=>{
      console.log(k);
      console.log(form.controls[k]);
    })

    return messages;
  }




  disabled:boolean=true;

  getClasses(id:number):String {
    let product = this.model.getProductById(id);
    return (product.price! <= 1000 ? "bginfo" : "bg-secondary") + "m-2 p-2";
  }

  getClassMap(id:number):Object{
    let product = this.model.getProductById(id);
    return{
      "bg-info":product.price!<=1000,
      "bg-secondary":product.price!>1000,
      "text-center text-white": product.name =="samsung s6"
    }
  }

  color:string=this.model.getProductById(2).price! <=1000 ? "green" : "red";

  getStyles(id:number){
    let product = this.model.getProductById(id);
    return {
      fontSize:"25px",
      color: product.price! <= 1000 ? "green" : "red"
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  productForm= new FormGroup({
    name: new FormControl('', [
     Validators.required,
     Validators.minLength(5),
     Validators.maxLength(20)
    ]),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required)
  })

  updateProduct(){
    this.productForm.patchValue({
      name:'IPhone x',
      price:5000
    })
  }

  get name(){
    return this.productForm.get('name');
  }

  
  constructor() {


   }

   ngOnInit(){
    
   }

  
}

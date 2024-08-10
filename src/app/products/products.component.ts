import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    products = [
      { id: 1, name: 'Product 1', price: 100,color:'Black',status:"Available"},
      { id: 2, name: 'Product 2', price: 300,color:'Blue',status:"Not Available"},
      { id: 3, name: 'Product 3', price: 400,color:'Red',status : "Available"},
      { id: 4, name: 'Product 4', price: 300,color:'Salmon',status : "Available"}
    ]
}

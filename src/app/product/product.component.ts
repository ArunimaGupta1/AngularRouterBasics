import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {name:"pencil",price:12.3,rating:4.5},
    {name:"Eraser",price:5.3,rating:4.3},
    {name:"Scale",price:16.3,rating:4.8}
  ]
}

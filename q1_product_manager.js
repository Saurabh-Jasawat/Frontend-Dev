"use strict";
// Q1 E-Commerce Product Manager

class Product {
  constructor(id, name, price, category){
    this.id=id; this.name=name; this.price=price; this.category=category;
  }
  applyDiscount(percent){
    this.price = this.price - (this.price*percent/100);
  }
  details(){
    return `ID:${this.id} Name:${this.name} Price:${this.price} Category:${this.category}`;
  }
}

const products=[
 new Product(1,"Laptop",50000,"Electronics"),
 new Product(2,"Mouse",500,"Electronics"),
 new Product(3,"Shoes",1500,"Fashion")
];

console.log(products.filter(p=>p.price>1000).map(p=>p.details()));

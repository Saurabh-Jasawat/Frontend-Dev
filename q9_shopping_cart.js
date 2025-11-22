"use strict";
class Cart{
 constructor(){ this.items=[]; }
 addItem(n,p,q){ this.items.push({name:n,price:p,qty:q}); }
 getTotal(){ return this.items.reduce((s,i)=>s+i.price*i.qty,0); }
 applyCoupon(code){
   if(!/^(SAVE|DISC)\d{1,2}$/i.test(code)) return this.getTotal();
   const percent=parseInt(code.match(/\d+/)[0]);
   return this.getTotal()*(1-percent/100);
 }
}
const cart=new Cart();
cart.addItem("A",1000,2);
console.log(cart.getTotal(), cart.applyCoupon("SAVE20"));

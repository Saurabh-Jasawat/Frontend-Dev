"use strict";
class Employee{
 constructor(id,name,dept,salary){
  this.id=id;this.name=name;this.department=dept;this.salary=salary;
 }
 getAnnualSalary(){ return this.salary*12; }
 applyBonus(p){ this.salary+= this.salary*p/100; }
}
const emps=[ new Employee(1,"A","HR",20000), new Employee(2,"B","IT",30000)];
const total=emps.reduce((s,e)=>s+e.getAnnualSalary(),0);
console.log("Total payout:", total);

"use strict";
class Book{
 constructor(title,author,isbn,isIssued=false){
  this.title=title;this.author=author;this.isbn=isbn;this.isIssued=isIssued;
 }
 issueBook(){ if(!this.isIssued) this.isIssued=true; }
 returnBook(){ this.isIssued=false; }
}
const books=[ new Book("A","AA","111"), new Book("B","BB","222",true)];
console.log("Available:", books.filter(b=>!b.isIssued));

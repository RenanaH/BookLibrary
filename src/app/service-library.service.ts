import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class ServiceLibraryService {
  public books: Book[];
  public editMode = false;
  public editBook: Book[];
  constructor() {
    this.books =  [
      {
        author: 'Suzanne Collins',
        date: new Date('4/5/1813'),
        title: 'the Hunger Games',
        id: '1'
      },
      {
        author: 'jane Austen',
        date: new Date('4/5/1981'),
        title: 'pride and Prejudice',
        id: '2'
      },
      {
        author: 'George Orwell',
        date: new Date('4/5/1991'),
        title: 'animal Farm',
        id: '3'
      }
      ];
   }
   getBooks()
   {
     return this.books;
   }
  

  saveEmit(itemBook,book) {
    this.books[itemBook] = book;
    alert(book.title);

  }
  saveAdd(book) {
    
    this.books.push(book);

  }
}

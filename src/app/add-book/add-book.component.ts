import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { ServiceLibraryService } from '../service-library.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.sass']
})
export class AddBookComponent implements OnInit {
book:Book;
  constructor(private servicelibrary : ServiceLibraryService) { }

  ngOnInit() {
    this.book = new Book();
  }
  saveEmitToAdd(book) {
   
    //const itemIndex = this.servicelibrary.getBooks().findIndex(item => item.id === book.id);
   // this.books[itemIndex] = book;
   //this.servicelibrary.getBooks().push(book);//.saveAdd(Book);
   this.servicelibrary.saveAdd(book);
   
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookserviceService } from 'src/app/services/bookservice.service';
import { SeriesService } from 'src/app/services/series.service';
import { GooglebooksService } from 'src/app/services/googlebooks.service';
import { Series } from 'src/app/models/series';
import { SpinnerServiceService } from 'src/app/services/spinner-service.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  book = new Book();
  series = new Series();
  googleId: string;
  googleBook: Array<any>;

  constructor(private bookService: BookserviceService, private seriesService: SeriesService,
              private googleBooks: GooglebooksService, public spinnerService: SpinnerServiceService) { }

  ngOnInit() {
  }

  addBook() {
    this.bookService.addBook(this.book).subscribe( data =>
      alert(data));
  }

  addSeries() {
    this.seriesService.addSeriesByBody(this.series).subscribe( data => {
      alert(data); } ) ;
  }

  addBookUsingGoogleId() {
    this.googleBooks.getBookFromGoogleBooks(this.googleId).subscribe( data => {
      this.book.title = data.volumeInfo.title;
      this.book.author = data.volumeInfo.authors[0];
      this.book.description = data.volumeInfo.description.toString();
      this.book.allPages = data.volumeInfo.pageCount;
      this.book.imageURL = data.volumeInfo.imageLinks.large ? data.volumeInfo.imageLinks.large : data.volumeInfo.imageLinks.thumbnail;
      this.book.releaseYear = data.volumeInfo.publishedDate.substring(0, 4);
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } );
  }
}

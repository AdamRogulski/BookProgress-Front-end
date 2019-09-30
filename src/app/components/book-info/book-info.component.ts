import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/bookservice.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  book: Book;
  updatedBook = new Book();
  pagesNumber: number;
  bookId: string;

  constructor(private bookService: BookserviceService, private route: ActivatedRoute,
              private snack: MatSnackBar) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.bookId = params.get('id');
    });
    this.route.paramMap.subscribe( params => {
    this.bookService.getOneBook(params.get('id')).subscribe( data => {
       this.book = data;
         });
      });
  }

  changePagesRead() {
    this.route.paramMap.subscribe( params => {
      this.bookService.changePagesRead(params.get('id'), this.pagesNumber).subscribe( data => {
        this.snack.open(data, 'OK!', {duration: 2000}),
        this.ngOnInit(); },
        error => this.snack.open('Podaj liczbe przeczytanych stron!', 'OK!', {duration: 2000}),
        );
    });
  }

  deleteBook() {
    if (confirm('Czy na pewno chesz usunąć tą książke?')) {
    this.route.paramMap.subscribe( params => {
      this.bookService.deleteBookById(params.get('id')).subscribe( data =>
        this.snack.open(data, 'OK!', {duration: 2000}));
    }); }
  }

  setBookToFavourite() {
    this.bookService.setBookFavourite(this.bookId).subscribe( data => {
      this.snack.open(data, 'OK!', {duration: 2000}),
      this.ngOnInit(); });
  }
}

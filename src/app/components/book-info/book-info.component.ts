import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/bookservice.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  book: Book;
  pagesNumber: number;

  constructor(private bookService: BookserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
    this.bookService.getOneBook(params.get('id')).subscribe( data => {
       this.book = data;
         });
      });
  }

  changePagesRead() {
    this.route.paramMap.subscribe( params => {
      this.bookService.changePagesRead(params.get('id'), this.pagesNumber).subscribe( data => {
        alert(data),
        this.ngOnInit(); });
    });
  }
}

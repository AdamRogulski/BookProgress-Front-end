import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookserviceService } from 'src/app/services/bookservice.service';
import { SeriesService } from 'src/app/services/series.service';
import { Series } from 'src/app/models/series';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  book = new Book();
  series = new Series();

  constructor(private bookService: BookserviceService, private seriesService: SeriesService) { }

  ngOnInit() {
  }

  addBook(): void {
    this.bookService.addBook(this.book).subscribe( data =>
      alert('Book Added!'));
  }

  addSeries(): void {
    this.seriesService.addSeriesByBody(this.series).subscribe( data =>
      alert(data));
  }


}

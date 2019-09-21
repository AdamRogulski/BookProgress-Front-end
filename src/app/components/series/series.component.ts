import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<any>;
  bookId: number;
  books: Array<any>;

  constructor(private seriesService: SeriesService, private bookService: BookserviceService) { }

  ngOnInit() {
    this.seriesService.getAllSeries().subscribe( data => {
      this.series = data;
    });
    this.bookService.getBooksWithoutSeries().subscribe( data =>
      this.books = data);
  }

  addBookToSeries(seriesId: number): void {
    this.seriesService.addBookToSeries(seriesId, this.bookId).subscribe( data => {
      alert(data),
      this.ngOnInit();
    });
  }

  removeBook(bookId): void {
    this.seriesService.removeBookFromSeries(bookId).subscribe( data => {
      alert(data),
    this.ngOnInit();
    });
  }
}

import { Component, OnInit, ViewChild, ElementRef, QueryList, ViewChildren, OnDestroy} from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { BookserviceService } from 'src/app/services/bookservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, transition, animate, style, state, stagger, query } from '@angular/animations';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  animations: [
    trigger('fadeIn', [
      transition( '* => *', [
      query(':enter', [
        style({ opacity: '0', }),
        stagger( 250, [
        animate('.5s ease-out', style({opacity: '1'})) ]) ], { optional: true})
      ])
    ])
  ]
})
export class SeriesComponent implements OnInit {

  series: Array<any>;
  allSeries: Array<any>;
  favouritesBooks: Array<any>;
  bookId: number;
  books: Array<any>;
  sortOptions = ['Alfabetycznie rosnąco', 'Alfabetycznie malejąco', 'Po dacie dodania malejąco', 'Po dacie dodania rosnąco'];
  selectedSortOption: string;
  searchInput: string;
  @ViewChildren('box') private box: QueryList<ElementRef>;
  hide = {};

  constructor(private seriesService: SeriesService, private bookService: BookserviceService, private snack: MatSnackBar,
              private router: Router) {
                this.router.events.subscribe( (event) => {
                if (event instanceof NavigationStart) {
                window.scrollTo(0, 0);
                }}
                );

  }

  ngOnInit() {
    this.seriesService.getAllSeries().subscribe( data => {
      this.series = data,
      this.allSeries = data;
    });
    this.bookService.getBooksWithoutSeries().subscribe( data =>
      this.books = data);

    this.bookService.getFavouritesBooks().subscribe( data =>
      this.favouritesBooks = data);
  }

  addBookToSeries(seriesId: number): void {
    this.seriesService.addBookToSeries(seriesId, this.bookId).subscribe( data => {
      this.snack.open(data, 'OK!', {duration: 2000}),
      this.ngOnInit();
    });
  }

  removeBook(bookId): void {
    this.seriesService.removeBookFromSeries(bookId).subscribe( data => {
      this.snack.open(data, 'OK!', {duration: 2000}),
      this.ngOnInit();
    });
  }

  sortSeries() {
    if (this.selectedSortOption === this.sortOptions[0]) {
    this.series.sort( (a, b) => a.seriesTitle.localeCompare(b.seriesTitle)); }
    if (this.selectedSortOption === this.sortOptions[1]) {
      this.series.sort( (a, b) => b.seriesTitle.localeCompare(a.seriesTitle)); }
    if (this.selectedSortOption === this.sortOptions[2]) {
    this.series.sort( (a, b) => a.seriesCreationTime.localeCompare(b.seriesCreationTime)); }
    if (this.selectedSortOption === this.sortOptions[3]) {
     this.series.sort( (a, b) => b.seriesCreationTime.localeCompare(a.seriesCreationTime)); }
  }

  search() {
    this.series = this.allSeries;
    this.series = this.series.filter( x => x.seriesTitle.toLowerCase().includes(this.searchInput.toLowerCase()));
  }

  scrollRight(seriesID) {
    const sBox = this.box.toArray();
    sBox.find(x => x.nativeElement.id === seriesID.toString()).nativeElement.scrollLeft += 210;
  }

  scrollLeft(seriesID) {
    const sBox = this.box.toArray();
    sBox.find(x => x.nativeElement.id === seriesID.toString()).nativeElement.scrollLeft -= 210;
  }
}

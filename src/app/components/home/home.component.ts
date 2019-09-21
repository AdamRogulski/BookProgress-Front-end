import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  booksList: Array<any>;

  constructor(private bookService: BookserviceService) { }

  ngOnInit() {
    this.bookService.getLatest8Books().subscribe( data =>
      this.booksList = data);
  }

}

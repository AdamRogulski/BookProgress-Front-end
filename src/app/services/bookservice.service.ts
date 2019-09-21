import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor( private http: HttpClient) { }

  url = '///192.168.2.10:8080';

  addBook(book: Book): Observable<any> {
    return this.http.post(this.url + '/books/add', book);
  }

  getBooks(): Observable<any> {
    return this.http.get(this.url + '/books');
  }

  getLatest8Books(): Observable<any> {
    return this.http.get(this.url + '/books/latest');
  }

  getBooksWithoutSeries(): Observable<any> {
    return this.http.get(this.url + '/books/empty');
  }

  getOneBook(bookId): Observable<any> {
    return this.http.get(this.url + '/books/' + bookId);
  }

  changePagesRead(bookId, pages): Observable<string> {
    const httpParams = new HttpParams()
    .append('read', pages);
    return this.http.put(this.url + '/books/' + bookId + '/pages/', httpParams, {responseType: 'text'});
  }


}

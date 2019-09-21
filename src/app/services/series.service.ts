import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  url = '///192.168.2.10:8080';

  constructor(private http: HttpClient) { }

  getAllSeries(): Observable<any> {
    return this.http.get(this.url + '/series');
  }

  addSeries(title: string): Observable<string> {
    const httpParams = new HttpParams()
    .append('title', title);

    return this.http.post(this.url + '/series/add', httpParams, {responseType: 'text'});
  }

  deleteSeries(id): Observable<string> {
    return this.http.delete(this.url + '/series/delete' + id, {responseType: 'text'});
  }

  getSeriesBooks(id): Observable<any> {
    return this.http.get(this.url + '/series' + id + '/books');
  }

  addBookToSeries(seriesId, bookId): Observable<any> {
    const httpParams = new HttpParams()
    .append('bookId', bookId);
    return this.http.post(this.url + '/series/'  + seriesId + '/add' , httpParams, {responseType: 'text'});
  }

  removeBookFromSeries(bookId): Observable<string> {
    return this.http.delete(this.url + '/series/remove/' + bookId , {responseType : 'text'});
  }
}

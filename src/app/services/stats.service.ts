import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getStats(): Observable<any> {
    return this.http.get('///192.168.2.10:8080/statistics');
  }
}

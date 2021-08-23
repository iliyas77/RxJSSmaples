import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { map, retry, tap, retryWhen, delay, scan } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FromEventService {

  subject = new BehaviorSubject<string>("iliyas");

  url: string = "https://reqres.in/api/users?page=4";

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {

    this.http.get(this.url).pipe(
      retryWhen((err) => err.pipe(
        delay(1000),
        scan((count) => {
          count = count + 1
          if (count > 5) {
            throw err;
          }
          return count;
        }, 0)
      ))
    ).subscribe((data) => {
      // console.log(data);
    });

    return from([])
  }
}

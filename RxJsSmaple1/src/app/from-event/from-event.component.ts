import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { fromEvent, interval, Subscriber, Subscription, timer, of, from, Observable } from 'rxjs';

import { toArray, take, map, pluck, tap, filter, takeLast, mergeAll, mergeMap } from 'rxjs/operators';
import { FromEventService } from './from-event.service';



@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  subject: boolean = true;
  name: string = "";

  constructor(private fromEventService: FromEventService) {
    // this.fromEventService.subject.subscribe((val) => {
    //   this.name = val;
    // })
  }


  getData(item: any) {
    return of("Number" + item);
  }

  ngAfterViewInit(): void {


    this.fromEventService.getData();

    const observableList = from([1, 2, 3]);
    observableList
      .pipe(
        mergeMap(item => this.getData(item))
      )
      .subscribe((item) => {
        console.log(item);
      })

  }


  ngOnInit(): void {
    // setTimeout(() => { this.fromEventService.subject.next(""); }, 1000)

  }


}


// fromEvent
// @ViewChild("mybutton") btn!: ElementRef;
//   ngAfterViewInit(): void {
//     fromEvent(this.btn.nativeElement, "click").subscribe((response) => {
//       console.log(response);
//     })
//   }

// interval 
// ngOnInit(): void {
//   const timer = interval(100);
//   const sub: Subscription = timer.subscribe((re) => {
//     console.log("--->", re);
//     if (re >= 5) {
//       sub.unsubscribe();
//     }

//   })
// }


// timer
// ngOnInit(): void {
//   const obser = timer(5000, 100);
//   const sub: Subscription = obser.subscribe((re) => {
//     console.log("--->", re);
//     if (re >= 5) {
//       sub.unsubscribe();
//     }

//   })
// }


// of
// const items = of("iliyas", "bilil", "shaik");
// items.subscribe((_item) => {
//   console.log(_item);
// })

//from 
// Array to observable
// const observableList = from([1, 2, 3, 4, 5]);
// observableList.subscribe((item) => {
//   console.log(item);
// })

//from promise to observable
// const _tempPromiss = new Promise((resolve) => {
//   resolve([1, 2, 3, 4]);
// });
// const observableList = from(_tempPromiss);
// observableList.subscribe((_temp) => {
//   console.log(_temp)
// });


//  string to Observable using from 
//  const stringObservable = from("iliyas shaik");
//  stringObservable.subscribe((_item) => {
//    console.log(_item);
//  })

// toArray :: operators
// const sample$ = of(1, 2, 3);
    // sample$.pipe(toArray()).subscribe((_item) => {
    //   console.log(_item);
    // })

    // const sample$ = interval(500);
    // sample$.pipe(take(10), toArray()).subscribe((_item) => {
    //   console.log(_item);
    // });


    // Custom Observable
    // const customIntervalObservable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // customIntervalObservable.subscribe((item) => {
    //   console.log(item);
    // })


    // Map Operator
    // const intervalObservable = interval(500);

    // intervalObservable.pipe(
    //   take(5),
    //   map((x) => {
    //     return x * 20;
    //   })
    // ).subscribe((x) => {
    //   console.log(x);
    // });


    // pluck 
    // from([
    //   { "name": "iliyas", "age": 29 },
    //   { "name": "bilal", "age": 22 },])
    //   .pipe(
    //     map(data => data.name),
    //     toArray(),
    //     tap(data => console.log(data)),
    //     pluck('age'),
    //   )
    //   .subscribe((data) => {
    //     // console.log(data);
    //   });


    //filter
    // const list = [
    //   {
    //     "name": "iliyas",
    //     "age": 29
    //   },
    //   {
    //     "name": "bilal",
    //     "age": 27
    //   },
    //   {
    //     "name": "munny",
    //     "age": 25
    //   },

    // ];

    // const observableList = from(list);

    // const searchString = "mun";

    // observableList
    //   .pipe(
    //     filter(temp => temp.name.indexOf(searchString) >= 0)
    //   )
    //   .subscribe((_item) => {
    //     console.log(_item);
    //   });
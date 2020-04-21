import { Component, ElementRef, ViewChild } from '@angular/core';
import { pipe, fromEvent, Subject, Observable, of, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, delay, concatMap, switchMap, exhaustMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';



@Component({
    selector: 'observable',
    templateUrl: 'observable.component.html'
})

export default class ObservableExamples {

    @ViewChild('obx') obx: ElementRef;
    @ViewChild('inputSeacrh') inputSeacrh: ElementRef;
    constructor(private httpClient: HttpClient) {
        //this.observableWrapperExample();
        //this.apicall();
        //this.mergeMap();
        //this.concatMap();
        //this.switchMap();
        //this.multicastVsUnicast();
        //this.behaviorSubjectExample();
        //this.replaySubjectExample();
        //this.asyncSubjectExample();


    }

    ngOnInit() {
        //this.exhaustMap();
        //this.debounceTime();
        //this.distinctUntilChanged();
    }

    private getData(): Observable<any> {
        return this.httpClient.get('../assets/data.json')
            .pipe(
                map((response) => response)
            );
    }

    private observableWrapperExample(): void {
        let documentClick$ = fromEvent(document, 'click');
        documentClick$.subscribe(
            (e) => {
                console.log(e);
            },
            (error) => {
                console.log(error);
            },
            () => { });

    }

    private apicall(): void {
        let data$ = this.getData()
            .pipe(
                map((data) => {
                    console.log(data);
                    return data;
                },
                    (error) => {

                    }))

        data$.subscribe((d) => {
            console.log(d);
        })
    }

    private mergeMap(): void {
        //FlatMap is an alias of mergeMap
        //https://rxjs-dev.firebaseapp.com/api/operators/mergeMap

        //Use Case 1
        let char$ = of('x', 'y', 'z');
        let number$ = of(1, 2, 3);

        char$.pipe(
            mergeMap(
                el => number$.pipe(
                    delay(2000),
                    map(num => el + num)
                )
            )
        ).subscribe(res => console.log(res));

        //Use Case 2
        const getData = (param) => {
            return of(`API call with param ${param}`).pipe(
                delay(2000)
            )
        }
        number$.pipe(
            mergeMap(param => getData(param))
        ).subscribe(res => console.log(res));

    }

    private concatMap(): void {
        //https://rxjs-dev.firebaseapp.com/api/operators/concatMap        
        let char$ = of('x', 'y', 'z');
        let number$ = of(1, 2, 3);

        char$.pipe(
            concatMap(el => number$.pipe(
                delay(2000),
                map(num => el + num)
            )
            )
        ).subscribe(res => console.log(res));
    }

    private switchMap(): void {
        //https://rxjs-dev.firebaseapp.com/api/operators/switchMap
        //Auto complete 
        //SwitchMap: Similar to Concat but unsubscribe/cancel the request if the latest observable has resolved.
        //Use Case 1
        let char$ = of('x', 'y', 'z');
        let number$ = of(1, 2, 3);

        char$.pipe(
            switchMap(el => number$.pipe(
                delay(2000),
                map(num => el + num)
            )
            )
        ).subscribe(res => console.log(res));
        //Use Case 2
        const getData = (param) => {
            return of(`API call with param ${param}`).pipe(
                delay(2000)
            )
        }
        number$.pipe(
            switchMap(param => getData(param))
        ).subscribe(res => console.log(res));
    }

    private exhaustMap(): void {
        //https://rxjs-dev.firebaseapp.com/api/operators/exhaustMap
        //Opposite of switchMap
        //ExhustMap: To ignore multiple events such as button clicks to save data to the server. Wait for observable to resolve.
        //Use Case 1
        let char$ = of('x', 'y', 'z');
        let number$ = of(1, 2, 3);

        char$.pipe(
            exhaustMap(el => number$.pipe(
                delay(2000),
                map(num => el + num)
            )
            )
        ).subscribe(res => console.log(res));

        //Use Case 2        
        const getData = () => {
            return of(`API call with param`).pipe(
                delay(2000)
            )
        }

        let buttonClick$ = fromEvent(this.obx.nativeElement, 'click');
        buttonClick$.pipe(
            exhaustMap(param => getData())
        ).subscribe(res => console.log(res));
    }

    private debounceTime(): void {
        //https://rxjs-dev.firebaseapp.com/api/operators/debounceTime
        const getData = () => {
            return of(`API Response `).pipe(
                delay(3000)
            )
        }

        const buttonClick$ = fromEvent(this.obx.nativeElement, 'click');
        buttonClick$.pipe(
            debounceTime(2000),
            exhaustMap(param => getData())
        ).subscribe(res => console.log(res));
    }

    private distinctUntilChanged(): void {
        const inputSeacrh$ = fromEvent(this.inputSeacrh.nativeElement, 'input');
        inputSeacrh$.pipe(
            debounceTime(1000),
            distinctUntilChanged()
        ).subscribe((res: any) => console.log(res.data));
    }

    private multicastVsUnicast(): void {
        //Unicast and cold observable
        // const test$ = Observable.create((source) => {
        //     source.next(Math.random());
        // });

        // test$.subscribe(d => {
        //     console.log(d);
        // })

        // test$.subscribe(d => {
        //     console.log(d);
        // })
        //---------------

        //Multicast and Hot observable
        // const subject = new Subject();

        // subject.subscribe(d => {
        //     console.log(d);
        // });
        // subject.subscribe(d => {
        //     console.log(d)
        // });

        // subject.next(Math.random());

    }

    private behaviorSubjectExample(): void {
        const behaviorSubjectObj$ = new BehaviorSubject(0);
        //const behaviorSubjectObj$ = new Subject();

        behaviorSubjectObj$.subscribe(d => {
            console.log('first', d);
        })

        behaviorSubjectObj$.next(1);
        behaviorSubjectObj$.next(2);

        behaviorSubjectObj$.subscribe(d => {
            console.log('Second', d);
        })

        behaviorSubjectObj$.next(3);
        //---

    }

    private replaySubjectExample(): void {
        const Obj$ = new ReplaySubject();

        Obj$.subscribe(d => {
            console.log(d);
        })

        Obj$.next(1);
        Obj$.next(2);
        Obj$.next(3);

        Obj$.subscribe(d => {
            console.log(d);
        })

        Obj$.next(4);
    }

    private asyncSubjectExample(): void {
        const Obj$ = new AsyncSubject();

        Obj$.subscribe(d => {
            console.log(d);
        })

        Obj$.next(1);
        Obj$.next(2);
        Obj$.next(3);

        Obj$.subscribe(d => {
            console.log(d);
        })

        Obj$.next(4);
        Obj$.complete();

    }
}

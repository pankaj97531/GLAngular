import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable()
export default class HttpExampleService {

    public someStream = new Subject();
    
    constructor(private httpClient: HttpClient) {
        // this.someStream.next(2);
        // this.someStream.next(3);
    }

    getData(): Observable<any> {
        const header = new HttpHeaders({
            name: 'some value'

        });
        const param = new HttpParams().append('param1', 'i am a first parame');
               
        return this.httpClient.get('../assets/data.json', { headers: header, params: param })
            .pipe(
                catchError(this.hadleError),
                map(response =>  response )
            );
    }

    private hadleError(erro: HttpErrorResponse) {
        return throwError;
    }
}

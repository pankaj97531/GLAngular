import { Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs'

@Injectable()
export default class MessageService{

    private message = new Subject<string>();

    public sendMessage(msg : string){
        this.message.next(msg)
    }

    public getMessage(): Observable<string>{
      return  this.message.asObservable();
    }
}
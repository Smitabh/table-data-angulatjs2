import { Injectable } from '@angular/core'
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { empdataInfo } from '../Model/gridData';


@Injectable()  
export class empService  
{  
   constructor(private http: Http) { }  
 
   private commentUrl:string = 'https://themanojshukla.github.io/mockdata.json';

   getEmplList(): Observable<empdataInfo[]> {
    return this.http.get(this.commentUrl)
        // ...and calling .json() on the response to return data
        .map((res: Response) => res.json())
        //...errors if any
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}

}

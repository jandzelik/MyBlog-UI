import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/internal/operators/';
import { IblogDisplay } from './iblog-display';

@Injectable({
  providedIn: 'root'
})
export class BlogDisplayService {
  private _myBlogURL = "http://localhost:50810/api/BlogMasters";
  private blogList: IblogDisplay;

  constructor(private _http: HttpClient) {

   }

   getBlogById(id: number): Observable<IblogDisplay>{
     const url = `${this._myBlogURL}/${id}`;
     console.log(url);
    return this._http.get<IblogDisplay>(url)
    .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
        );
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}

import { Injectable } from '@angular/core';
import { IblogList } from './iblog-list';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/internal/operators/';

@Injectable({
  providedIn: 'root'
})
export class BlogListService {
  private _myBlogURL = "http://localhost:50810/api/BlogMasters";
  private blogList: IblogList[];

  constructor(private _http: HttpClient) { 

  }

  getBlogs(): Observable<IblogList[]>{
    return this._http.get<IblogList[]>(this._myBlogURL)
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

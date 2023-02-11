import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { ErrorService } from './error.service';
import { catchError, Observable, throwError } from 'rxjs';
import { News } from '../model/models';




@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }


  // errorHandler(error: HttpErrorResponse){
  //   this.errorService.handle(error.message)
  //   return throwError(()=>error.message)
  // }

  // getAll(): Observable<News[]> {
  //   return this.http.get<News[]>
  //   ('http://localhost:8000/api/news', {
  //     params: new HttpParams({
  //     })
  //   }).pipe(
  //       catchError(this.errorHandler.bind(this))
  //   )
  // }

  getTest(): News {
    return {
      id: 1,
      title: "string",
      description: "string",
      link: "string"
    }
  }

  // getById(id: number): Observable<News[]> {
  //   return this.http.get<News[]>
  //   ('http://localhost:8000/api/news/'+id, {
  //     params: new HttpParams({
  //     })
  //   }).pipe(
  //     catchError(this.errorHandler.bind(this))
  //   )
  // }

}

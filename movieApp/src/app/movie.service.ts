import { Injectable, Input } from '@angular/core';
import { Movie } from './movie';

import { Observable,of,throwError } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { tap,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  path="http://localhost:3000/movies/";
  
  constructor(
    private loggingService:LoggingService,
    private http:HttpClient
  ) { }

  /*getMovies():Observable<Movie[]>{
    this.loggingService.add('MovieService: listing movies');
    return this.http.get<Movie[]>(this.path);
  }*/

   movies!: Movie[];

  /*getMovies(){
    this.getApi().subscribe(data=>{
      this.movies=data
    })
  }*/

 

  getMovie(id:number):Observable<Movie[]>{
    return this.http.get<Movie[]>(this.path+id).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }




  /*APİ İLE İLGİLİ KODLAR*/
  handleError(err:HttpErrorResponse){
    let errorMessage =''
    if(err.error instanceof ErrorEvent){
      errorMessage="Bir hata oluştu "+ err.error.message
    }else{
      errorMessage="Sistemsel bir hata"
    }
    return throwError(errorMessage);
  }


  //GET
  getMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  //PUT
  update(movie:Movie | any):Observable<Movie>{
    return this.http.put<Movie>(this.path+movie.id,movie).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  add(movie:Movie |any):Observable<Movie>{
    return this.http.post<Movie>(this.path,movie).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  delete(movie:Movie | any):Observable<Movie>{
    return this.http.delete<Movie>(this.path+movie.id).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

}

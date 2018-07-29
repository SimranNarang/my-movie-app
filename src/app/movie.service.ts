import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _url: string = "http://localhost:8092/movie/api/v1/movies"
  
  constructor(private http: HttpClient, private router : Router) { }
  
  getAllMovie(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this._url);
  }
  getMovieById(): Observable<IMovie>{
    return this.http.get<IMovie>('http://localhost:8092/movie/api/v1'+this.router.url);
  }
}

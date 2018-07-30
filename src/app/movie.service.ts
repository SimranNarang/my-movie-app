import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _url: string = "http://localhost:8081/api/v1"
  
  constructor(private http: HttpClient, private router : Router) { }
  
  getAllMovie(): Observable<IMovie>{
    return this.http.get<IMovie>(this._url+'/movies');
  }
  getMovieById(id): Observable<IMovie>{
    return this.http.get<IMovie>(this._url+'/movie/'+id);
  }
  saveMovie(movie){
    return this.http.post<IMovie>(this._url+'/movie',movie);
  }

  deleteUser(id) {
    return this.http.delete(this._url + '/movie/' + id);
  }
}

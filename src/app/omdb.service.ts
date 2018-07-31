import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private http: HttpClient) { }
  _url = "http://www.omdbapi.com/?s=superman&apikey=2502de5b";
  getAllMovies(){
    return this.http.get(this._url);
  }
  getSearchedMovies(title){
    return this.http.get("http://www.omdbapi.com/?s="+title+"&apikey=2502de5b");
  }
}

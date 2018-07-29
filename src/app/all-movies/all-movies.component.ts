import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  public movie;
  public movies =[];
  constructor(private allmovies: MovieService) { }

  ngOnInit() {
    this.allmovies.getAllMovie().subscribe(data=> this.movies = data);
  }
  getMovie(){
    
      this.allmovies.getMovieById().subscribe(
        data => this.movie = data 
      );
  }

}

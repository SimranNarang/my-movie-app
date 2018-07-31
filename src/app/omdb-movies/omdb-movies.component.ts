import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../omdb.service';
import { IMovie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-omdb-movies',
  templateUrl: './omdb-movies.component.html',
  styleUrls: ['./omdb-movies.component.css']
})
export class OmdbMoviesComponent implements OnInit {

  movie = new IMovie();
  id= 1235;
  constructor(private omdbService: OmdbService,private movieService : MovieService) { }
  movies;

  ngOnInit() {
    this.omdbService.getAllMovies().subscribe(data => this.movies = data['Search']);
  }
  movieSearch(title){
    this.omdbService.getSearchedMovies(title).subscribe(data=> this.movies = data['Search']);
  }
  
  saveMovie(model){
    this.movie.id = this.id++;
    this.movie.imdbId = model.imdbID;
    this.movie.title = model.Title;
    this.movie.poster = model.Poster;
    this.movie.year = model.Year;
    this.movieService.saveMovie(this.movie).subscribe(
      data=>this.movie=data
    );
   }

}

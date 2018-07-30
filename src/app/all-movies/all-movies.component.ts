import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  public movie;
  public movies;
  
  
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.movieService.getAllMovie().subscribe(data=> this.movies = data);
  }
  
  getMovie(id){
    this.router.navigate(['/movie', id]);
  }

  deleteMovie(id){
    this.movieService.deleteUser(id).subscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IMovie } from '../movie';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  constructor(private data: MovieService, private router: Router, private route:ActivatedRoute) { }
  movieId;
  movie: Object;
  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap)=>this.movieId=parseInt(param.get('id')));
    this.data.getMovieById(this.movieId).subscribe(
      data => this.movie = data 
    );
  }
}

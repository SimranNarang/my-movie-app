import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-save-movie',
  templateUrl: './save-movie.component.html',
  styleUrls: ['./save-movie.component.css']
})
export class SaveMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  movie;
  ngOnInit() {
  }
  onSubmit(model){
   this.movieService.saveMovie(model).subscribe();
  }
  
}

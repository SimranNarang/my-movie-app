import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieService } from './movie.service';
import {HttpClientModule} from '@angular/common/http';
import{ NoopAnimationsModule} from '@angular/platform-browser/animations'
import { MoviePageComponent } from './movie-page/movie-page.component'
import { MaterialModule } from './material';
import { MovieCardComponent } from './movie-card/movie-card.component';
import{ FormsModule } from '@angular/forms';
import { SaveMovieComponent } from './save-movie/save-movie.component';
import { OmdbMoviesComponent } from './omdb-movies/omdb-movies.component'
import {OmdbService} from './omdb.service';
import { NavBarComponent } from './nav-bar/nav-bar.component'
@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    MoviePageComponent,
    MovieCardComponent,
    SaveMovieComponent,
    OmdbMoviesComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [MovieService,OmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

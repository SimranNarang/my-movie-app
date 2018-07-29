import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieService } from './movie.service';
import {HttpClientModule} from '@angular/common/http';
import{ NoopAnimationsModule} from '@angular/platform-browser/animations'
import { MoviePageComponent } from './movie-page/movie-page.component'
@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule

  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

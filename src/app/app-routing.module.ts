import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllMoviesComponent } from "./all-movies/all-movies.component";
import { MoviePageComponent } from "./movie-page/movie-page.component";
import { OmdbMoviesComponent } from "./omdb-movies/omdb-movies.component";

const routes: Routes = [
  {
    path: "",
    component: AllMoviesComponent
  },
  {
    path: "movie/:id",
    component: MoviePageComponent
  },
  {
    path: "omdb",
    component: OmdbMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

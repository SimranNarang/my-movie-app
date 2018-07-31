import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdbMoviesComponent } from './omdb-movies.component';

describe('OmdbMoviesComponent', () => {
  let component: OmdbMoviesComponent;
  let fixture: ComponentFixture<OmdbMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmdbMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmdbMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

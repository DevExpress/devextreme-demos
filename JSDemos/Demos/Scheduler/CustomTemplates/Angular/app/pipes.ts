import { Pipe, PipeTransform } from '@angular/core';
import Query from 'devextreme/data/query';
import { Service, MovieData } from './app.service';

@Pipe({ name: 'getMovie' })
export class MoviePipe implements PipeTransform {
  moviesData: MovieData[];

  constructor(private service: Service) {
    this.moviesData = service.getMoviesData();
  }

  transform(id: number): MovieData {
    return Query(this.moviesData).filter(['id', '=', id]).toArray()[0];
  }
}

import React from 'react';
import Query from 'devextreme/data/query';

import { moviesData } from './data.js';

const getMovieById = (id) => Query(moviesData).filter(['id', id]).toArray()[0];

export function AppointmentTooltip(props) {
  const movieData = getMovieById(props.data.appointmentData.movieId);

  return (
    <div className="movie-tooltip">
      <img src={movieData.image} />
      <div className="movie-info">
        <div className="movie-title">
          {movieData.text} ({movieData.year})
        </div>
        <div>
          Director: {movieData.director}
        </div>
        <div>
          Duration: {movieData.duration} minutes
        </div>
      </div>
    </div>
  );
}

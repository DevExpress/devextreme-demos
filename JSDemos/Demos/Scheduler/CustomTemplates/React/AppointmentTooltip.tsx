import React from 'react';
import Query from 'devextreme/data/query';

import { moviesData } from './data.ts';

const getMovieById = (id) => Query(moviesData).filter(['id', id]).toArray()[0];

const AppointmentTooltip = (props: { data: { appointmentData: { movieId: any; }; }; }) => {
  const { movieId } = props.data.appointmentData;

  const movieData = React.useMemo(() => getMovieById(movieId), [movieId]);

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
};

export default AppointmentTooltip;

import React from 'react';
import Query from 'devextreme/data/query';
import localization from 'devextreme/localization';
import { moviesData } from './data.js';

const getMovieById = (id) => Query(moviesData).filter(['id', id]).toArray()[0];

const Appointment = (props) => {
  console.log(props);
  const { targetedAppointmentData } = props.data;

  const movieData = getMovieById(targetedAppointmentData.movieId) || {};

  return (
    <div className="showtime-preview">
      <div> {movieData.text}</div>
      <div>
        Ticket Price: <strong>${ targetedAppointmentData.price }</strong>
      </div>
      <div>
        {localization.formatDate(targetedAppointmentData.displayStartDate, 'shortTime')}
        {' - '}
        {localization.formatDate(targetedAppointmentData.displayEndDate, 'shortTime')}
      </div>
    </div>
  );
}

export default Appointment;
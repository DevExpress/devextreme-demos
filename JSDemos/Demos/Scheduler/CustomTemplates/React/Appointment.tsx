import React from 'react';
import Query from 'devextreme/data/query';
import localization from 'devextreme/localization';
import { moviesData } from './data.ts';

const getMovieById = (id) => Query(moviesData).filter(['id', id]).toArray()[0];

const Appointment = (props: { data: { targetedAppointmentData: any; }; }) => {
  const { targetedAppointmentData } = props.data;
  const { movieId } = targetedAppointmentData;

  const movieData = React.useMemo(() => getMovieById(movieId), [movieId]);

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
};

export default Appointment;

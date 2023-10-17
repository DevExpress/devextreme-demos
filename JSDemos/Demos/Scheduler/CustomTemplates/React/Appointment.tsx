import React from 'react';
import Query from 'devextreme/data/query';
import localization from 'devextreme/localization';
import { moviesData } from './data.ts';
import { SchedulerTypes } from 'devextreme-react/scheduler';

const getMovieById = (id) => Query(moviesData).filter(['id', id]).toArray()[0];

type AppointmentProps = {
  data: { targetedAppointmentData: SchedulerTypes.Appointment; }
};

const Appointment: React.FunctionComponent<AppointmentProps> = (props) => {
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

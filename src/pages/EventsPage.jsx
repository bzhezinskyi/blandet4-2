import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchEvents } from 'services/eventApp.services';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   fetchEvents().then(setEvents);
  // }, []);

  return (
    <ul>
      {events.map(({ id, name }) => (
        <li key={id}>
          <Link to={id}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default EventsPage;

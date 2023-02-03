import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchEvents } from 'services/eventApp.services';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <>
      <ul className="list-group">
        {events.map(({ id, name }) => (
          <li key={id} className="list-group-item">
            <Link to={id} state={{ from: location }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
export default EventsPage;

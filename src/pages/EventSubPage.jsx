import { useFetchEvent } from 'hooks/useFetchEvent';
import { Link, useLocation } from 'react-router-dom';

const EventSubPage = () => {
  const event = useFetchEvent();
  const location = useLocation();

  return (
    <>
      {event && (
        <div className="card">
          <img
            src={event.images[0].url}
            alt={event.name}
            className="card-img-top"
          />
          <div className="card-body">
            <h4 className="card-title">{event.name}</h4>{' '}
            <Link
              to="details"
              state={location.state}
              className="btn btn-primary"
            >
              More info
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default EventSubPage;

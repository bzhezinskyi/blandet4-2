import { useFetchEvent } from 'hooks/useFetchEvent';
import { useLocation, useNavigate } from 'react-router-dom';

const EventDetailsPage = () => {
  const event = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="container">
      <button
        className="btn btn-primary mt-4"
        type="button"
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        Go Back
      </button>
      {event && (
        <div className="mt-4">
          <h2>{event.name}</h2>
          <img
            src={event.images[0].url}
            alt={event.name}
            className="mt-4"
            width="100%"
          />
          <div className="row mt-4 text-center">
            <p className="col fs-3">
              <span className="fw-bolder">Segment: </span>
              {event.classifications[0].segment.name}
            </p>
            <p className="col fs-3">
              <span className="fw-bolder">Genre: </span>
              {event.classifications[0].genre.name}
            </p>
            <p className="col fs-3">
              <span className="fw-bolder">Subgenre: </span>
              {event.classifications[0].subGenre.name}
            </p>
          </div>
          <div className="row mt-4 text-center">
            <p className="col fs-3">
              <span className="fw-bolder">Date: </span>
              {event.dates.start.localDate}
            </p>
            <p className="col fs-3">
              <span className="fw-bolder">Time: </span>
              {event.dates.start.localTime}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default EventDetailsPage;

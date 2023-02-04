import Modal from 'components/Modal';
import { useFetchEvent } from 'hooks/useFetchEvent';
import { Link, useLocation } from 'react-router-dom';

const EventSubPage = () => {
  const event = useFetchEvent();
  const location = useLocation();

  return (
    <>
      {event && (
        <Modal
          header={<h4 className="card-title">{event.name}</h4>}
          body={
            <img
              src={event.images[0].url}
              alt={event.name}
              className="card-img-top"
            />
          }
          footer={
            <Link
              to="details"
              state={location.state}
              className="btn btn-primary"
            >
              More info
            </Link>
          }
        ></Modal>
      )}
    </>
  );
};
export default EventSubPage;

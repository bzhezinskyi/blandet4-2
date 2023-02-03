import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchEventById } from 'services/eventApp.services';

export const useFetchEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEventById(eventId).then(setEvent);
  }, [eventId]);

  return event;
};

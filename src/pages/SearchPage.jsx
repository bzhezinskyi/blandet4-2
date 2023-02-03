import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchEventsByName } from 'services/eventApp.services';

const SearchPage = () => {
  const [events, setEvents] = useState('');
  const [searchParams, setSearchParamc] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function searchEvent() {
      await fetchEventsByName(searchQuery).then(setEvents).catch();
    }
    searchEvent();
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParamc({ search: event.currentTarget.elements.search.value });
  };

  return (
    <>
      <div className="container mt-4">
        <form className="row" onSubmit={handleSubmit}>
          <input type="text" name="search" className="form-control col" />
          <button className="btn btn-primary col-auto">Search</button>
        </form>
      </div>
      {events && (
        <ul className="list-group mt-4">
          {events.map(({ id, name }) => (
            <li key={id} className="list-group-item">
              <Link to={id} state={{ from: location }}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </>
  );
};

export default SearchPage;

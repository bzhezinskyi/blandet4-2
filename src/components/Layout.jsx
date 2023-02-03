import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <header>
        {!location.pathname.includes('details') && (
          <nav>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="events">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="search">
                  Search
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;

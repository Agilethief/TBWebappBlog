import { Outlet, Link } from "react-router-dom";
import "../app.css";

const Root = () => {
  return (
    <>
      <div id='sidebar'>
        <h1>Blog</h1>
        <div>
          <form
            id='search-form'
            role='search'
          >
            <input
              id='q'
              aria-label='Search'
              placeholder='Search'
              type='search'
              name='q'
            />
            <div
              id='search-spinner'
              aria-hidden
              hidden={true}
            />
            <div
              className='sr-only'
              aria-live='polite'
            ></div>
          </form>
        </div>
        <div>
          <form method='post'>
            <button type='submit'>Search</button>
          </form>
        </div>
        <nav>
          <ul>
            <Link
              className='menubutton'
              to={`/`}
            >
              Home
            </Link>
            <Link
              className='menubutton'
              to={`/About`}
            >
              About
            </Link>
          </ul>
        </nav>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
};

export default Root;

import {
  Outlet,
  Link,
  useLoaderData,
} from "react-router-dom";
//import { getBlogs} from "../blogs.js"; // This will be how we get the data from the back end
import "../app.css";

export async function loader() {
  //const blogs = await getBlogs();
  //return { blogs };

  return { Blog: "blog" };
}

const Root = () => {
  const data = useLoaderData();
  console.log(data);
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
            <Link
              className='menubutton'
              to={`/Blog/1`}
            >
              Blog
            </Link>
          </ul>
        </nav>
      </div>
      <div className='sidebarPad'></div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
};

export default Root;

import { Outlet, Link } from "react-router-dom";

function Layout(){
   return (
  <>
    <nav className="layout-nav">
    <logo className="logo"><img src={require('../assets/mani-logo.png')} alt=""  width="200"/><div className="search"><a href="" className="search-link">Search</a>  <a href="#" className="login">help</a></div></logo>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
   )
}

export default Layout;
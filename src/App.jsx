import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import Discord from "./component/Discord";
import Home from "./component/Home";
import About from "./component/About";
import Dashboard from "./component/Dashboard";
import Logo from "./assets/logo.png";

// update the position of the mouse flashers to follow the mouse
document.addEventListener("mousemove", (e) => {
    const mouseFlashers = document.querySelector(".mouse-flashers");
    mouseFlashers.style.left = e.clientX + "px";
    mouseFlashers.style.top = e.clientY + "px";
});

export default function App() {
  return (
    <>
    <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="discord" element={<Discord />} />

        {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
    </div>
    <div className="mouse-flashers"><div className="blue-light"></div><div className="red-light"></div></div>
    </>
  );
}

function Layout() {
  return (
    <div>
    {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}
    <img src={Logo} alt="CopsRP Logo" className="logo smalllogo" />
    <nav className="nav-container">
        <p className="font-face-due-date">
            <Link to="/">Home</Link>
        </p>
        <p className="font-face-due-date">
            <Link to="/discord">Discord</Link>
        </p>
        <p className="font-face-due-date">
            <Link to="/about">About</Link>
        </p>
        <p className="font-face-due-date">
            <Link to="/dashboard">Dashboard</Link>
        </p>
        {/* <p>
            <Link to="/nothing-here">Nothing Here</Link>
        </p> */}
    </nav>

    <hr />

    {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
    <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
    <h2>Nothing to see here!</h2>
    <p>
      <Link to="/">Go to the home page</Link>
    </p>
    </div>
  );
}
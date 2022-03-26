

import { Link, Outlet } from "react-router-dom";

import React from "react";

function Navbar() {
    return (
        <nav>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">Simply Good Food</Link>
                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            <Link to="/all-recipes" className="nav-link">All Recipes</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/menuideas" className="nav-link">Menu Ideas</Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </nav>
    );
}

export default Navbar;
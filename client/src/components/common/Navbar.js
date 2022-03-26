import { Link, Outlet } from "react-router-dom";

import React from "react";

function Navbar() {
    return (
        <nav>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
                <div className="container">
                    <a href="#" className="navbar-brand">Simply Good Food</a>

                    <button
                        className="navbar-toggler"
                        type="button"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="all-recipes" className="nav-link">All Recipes</a>
                            </li>
                            <li className="nav-item">
                                <a href="about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#menuideas" className="nav-link">Menu Ideas</a>
                            </li>
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
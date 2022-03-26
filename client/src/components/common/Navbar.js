import { Link, Outlet } from "react-router-dom";

import React from "react";

function Navbar() {
    return (
        <nav>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
                <div class="container">
                    <a href="#" class="navbar-brand">Simply Good Food</a>

                    <button
                        class="navbar-toggler"
                        type="button"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navmenu">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a href="#all-recipes" class="nav-link">All Recipes</a>
                            </li>
                            <li class="nav-item">
                                <a href="#about" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="#menuideas" class="nav-link">Menu Ideas</a>
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
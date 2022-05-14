import React from "react";
import logo from '../../assests/logos/starlogo.png'; // with import

function Navbar() {
return (
    <header>
        <nav className="navbar navbar-expand-sm" id="navbar-header">
            <div className="container">
                <a href="/"><span className="navbar-text" id="header" href="/"><img id="logo" src={logo}
                            alt="logo" /></span></a>
                <button id="nav-toggle-button" className="navbar-toggler custom-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul id="navbar-links" className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)
}

export default Navbar;
import React from "react";
import logo from '../assests/starlogo.png'; // with import

function Navbar() {
return <>
        <header>
            <nav class="navbar navbar-expand-sm" id="navbar-header">
                <div class="container">
                    <a href="/"><span class="navbar-text" id="header" href="/"><img id="logo" src={logo}
                                alt="logo" /></span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul id="navbar-links" class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">All products</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
</>;
}

export default Navbar;
import React from "react";
import {Link} from "react-router-dom";
import { HashLink} from 'react-router-hash-link';
import Logo from "../logo/Logo";
import classes from "./Header.module.css"
import SearchBar from "../UI/searchBar/SearchBar";

const Header = () =>
    <header className={classes.Header}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
            <Link className="navbar-brand ml-0" to="/">
                <Link to="/" title="Go To Home Page">
                    <Logo height="10px"/>
                </Link>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <HashLink className="nav-link" to="/#about">About</HashLink>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bookstore">Bookstore</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users/:userId/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
                <div className="pt-2">
                    <SearchBar />
                </div>
            </div>
        </nav>
    </header>

export default Header;
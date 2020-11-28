import React from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import {BsFillPersonFill} from "react-icons/bs";
import { connect } from "react-redux";
import Logo from "../logo/Logo";
import classes from "./Header.module.css"
import SearchBar from "../UI/searchBar/SearchBar";
import {signOut} from "../../actions/authActions";

const Header = ({isSignedIn, authInstance, signOut}) => {
    const matchBookstore = useRouteMatch({path: "/bookstore", exact: true})

    return (
        <header className={classes.Header}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                <Link className="navbar-brand ml-0" to="/">
                    <Logo height="40px"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
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
                            {   !isSignedIn?
                                <Link className="nav-link" to="/login"><BsFillPersonFill className="mb-1"/> Login</Link>:
                                <button  onClick={() => authInstance.signOut().then(signOut())}
                                         className={"nav-link " + classes.logOutButton} ><BsFillPersonFill className="mb-1"/> Log out</button>
                            }
                        </li>
                    </ul>
                    {
                        matchBookstore ? null : (
                            <div className={"pt-2 " + classes.searchBar}>
                                <SearchBar/>
                            </div>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}

const StateToPropertyMapper = (state) => ({
    isSignedIn: state.auth.isSignedIn,
    authInstance: state.auth.authInstance
});

export default connect(StateToPropertyMapper, {signOut})(Header);

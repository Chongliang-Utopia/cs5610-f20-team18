import React from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import {BsFillPersonFill} from "react-icons/bs";
import {connect} from "react-redux";
import Logo from "../logo/Logo";
import classes from "./Header.module.css"
import SearchBar from "../UI/searchBar/SearchBar";
import {signOut} from "../../actions/authActions";
import {logout} from "../../actions/authWithEmailActions";


const Header = ({isLoggedInWithGoogle, authInstance, signOut, isLoggedInWithEmail, logout, user}) => {
    const matchBookstore = useRouteMatch({path: "/bookstore", exact: true})

    return (
        <header className={classes.Header}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                <Link className="navbar-brand ml-0" to="/">
                    <Logo height="40px"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
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
                            {user && user.isAdmin ?
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin">Admin</Link>
                                </li> :
                                <Link className="nav-link" to="/users/:userId/profile">Profile</Link>
                            }
                        </li>
                        <li className="nav-item">
                            {!isLoggedInWithGoogle && !isLoggedInWithEmail ?
                                <Link className="nav-link" to="/login"><BsFillPersonFill
                                    className="mb-1"/> Login</Link> :
                                <button
                                    onClick={() => isLoggedInWithGoogle ? authInstance.signOut().then(signOut()) : logout()}
                                    className={"nav-link " + classes.logOutButton}><BsFillPersonFill
                                    className="mb-1"/> Log
                                    out</button>
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
    isLoggedInWithGoogle: state.auth.isSignedIn,
    isLoggedInWithEmail: state.authWithEmail.isLoggedIn,
    authInstance: state.auth.authInstance,
    user: state.authWithEmail.user
});


export default connect(StateToPropertyMapper, {signOut, logout})(Header);



import React from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import {BsFillPersonFill} from "react-icons/bs";
import {connect} from "react-redux";
import Logo from "../logo/Logo";
import classes from "./Header.module.css"
import SearchBar from "../UI/searchBar/SearchBar";
import {logout, requestLoginWithThunk} from "../../actions/authActions";
import history from "../../history";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {Tooltip} from "react-bootstrap";


const Header = ({isLoggedIn, logout, user, currentUser, requestLoginWithThunk}) => {
    const matchBookstore = useRouteMatch({path: "/books", exact: true})

    const renderProfile = () => {
        if (isLoggedIn) {
            if (user.isAdmin) {
                return <Link className="nav-link" to="/admin">Admin</Link>
            } else {
                return <Link className="nav-link" to={"/profile"}>Profile</Link>

            }
        } else {
            return null
        }
    }

    const renderLogoutTooltip = (props) =>
        <Tooltip {...props}>
            Click to Log Out
        </Tooltip>

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
                            <Link className="nav-link" to="/books">Bookstore</Link>
                        </li>
                        <li className="nav-item">
                            {renderProfile()}
                        </li>
                        <li className="nav-item">
                            {!isLoggedIn ?
                                <button className={"nav-link " + classes.logOutButton} to="/login"
                                      onClick={() => requestLoginWithThunk(window.location.pathname)}
                                ><BsFillPersonFill
                                    className="mb-1"/> Login</button> :
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{show: 250, hide: 400}}
                                    overlay={renderLogoutTooltip}>
                                <button
                                    onClick={() => {
                                        if (window.location.pathname.startsWith("/admin")) {
                                            history.push("/")
                                        }
                                        if (window.location.pathname.startsWith("/profile")) {
                                            history.push(`/profile/${currentUser._id}`)
                                        }
                                        logout();
                                    }}
                                    className={"nav-link " + classes.logOutButton}><BsFillPersonFill
                                    className="mb-1"/> Hello, {user.username? user.username: user.email}</button>
                                </OverlayTrigger>
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
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    currentUser: state.profile.user
});


export default connect(StateToPropertyMapper, {logout, requestLoginWithThunk})(Header);

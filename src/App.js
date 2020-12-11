import React, {Component, Fragment} from 'react';
import classes from './App.module.css';
import {Router, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/HomePage/HomePage";
import BookDetail from "./components/bookDetail/BookDetail";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUp";
import CreatePassword from "./components/authentication/CreatePassword";
import UserProfile from "./components/Profile/UserProfile";
import BookStore from "./components/bookStore/bookStore";
import Footer from "./components/footer/Footer";
import Admin from "./components/admin/Admin";
import history from "./history";
import PrivateRoute from "./components/PrivateRoute";
import UserSignUpAddress from "./components/authentication/SignUpAddress";
import UserSignUpProfile from "./components/authentication/SignUpProfile";
import ResetPassword from "./components/authentication/ResetPassword";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin"

class App extends Component {

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/createpassword" component={CreatePassword}/>
                    <PrivateRoute exact path="/signupprofile" component={UserSignUpProfile}/>
                    <PrivateRoute exact path="/signupaddress" component={UserSignUpAddress} />
                    <PrivateRoute exact path="/resetPassword" component={ResetPassword} />
                    <Fragment>
                        <div className={classes.App}>
                            <Header/>
                                <main>
                                    <Route exact path={["/", "/home"]} component={HomePage}/>
                                    <Route exact path="/details/:bookId" component={BookDetail}/>
                                    <Route exact path="/profile" component={UserProfile}/>
                                    <Route exact path="/profile/:userId" component={UserProfile}/>
                                    <Route exact path="/profile/sections/:section" component={UserProfile}/>
                                    <Route exact path={["/books", "/bookstore", "/search/:criteria", "/search"]} component={BookStore}/>
                                    <PrivateRouteAdmin exact path="/admin" component={Admin}/>
                                    <PrivateRouteAdmin exact path="/admin/:section" component={Admin}/>
                                </main>
                            <Footer/>
                        </div>
                    </Fragment>
                </Switch>
            </Router>
        );
    }
}

export default App;

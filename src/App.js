import React, {Component, Fragment} from 'react';
import classes from './App.module.css';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/HomePage/HomePage";
import GoogleBookClient from "./components/googleBookClient";
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
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import UserSignUpAddress from "./components/authentication/UserSignUpAddress";
import UserSignUpProfile from "./components/authentication/UserSignUpProfile";

class App extends Component {

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/createpassword" component={CreatePassword}/>
                    <Route exact path="/signupprofile" component={UserSignUpProfile}/>
                    <Route exact path="/signupaddress" component={UserSignUpAddress} />
                    <Fragment>
                        <div className={classes.App}>
                        <Header/>
                        <main>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/search" component={GoogleBookClient}/>
                        <Route exact path="/books/:bookId" component={BookDetail}/>
                        <Route exact path="/users/:userId/profile" component={UserProfile}/>
                        <Route exact path="/users/:userId/profile/:section" component={UserProfile}/>
                        <Route exact path="/bookstore" component={BookStore}/>
                        <PrivateRouteAdmin exact path="/admin" component={Admin}/>
                        <Redirect to="/"/>
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
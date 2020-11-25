import React, {Component, Fragment} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/HomePage/HomePage";
import GoogleBookClient from "./components/googleBookClient";
import BookDetail from "./components/bookDetail/BookDetail";
import LogIn from "./components/authentication/LogIn";
import SignUp from "./components/authentication/SignUp";
import CreatePassword from "./components/authentication/CreatePassword";
import UserProfile from "./components/Profile/UserProfile";
import BookStore from "./components/bookStore/bookStore";
import Footer from "./components/footer/Footer";
import Admin from "./components/admin/Admin";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={LogIn}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/createpassword" component={CreatePassword}/>
                    <Fragment>
                        <Header/>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/search" component={GoogleBookClient}/>
                        <Route exact path="/books/:bookId" component={BookDetail}/>
                        <Route exact path="/users/:userId/profile" component={UserProfile}/>
                        <Route exact path="/users/:userId/profile/:section" component={UserProfile}/>
                        <Route exact path="/bookstore" component={BookStore}/>
                        <Route exact path="/admin" component={Admin}/>
                        <Footer/>
                    </Fragment>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
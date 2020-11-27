import React, {Component} from "react";
import classes from "./Authentication.module.css";
import { connect } from "react-redux";
import {signIn} from "../../actions/authActions";
import history from "../../history";

class LoginWithGoogle extends Component {

    // initialize google api library
    componentDidMount() {
        window.gapi.load("client: auth2", () => {
            window.gapi.client.init ({
                clientId: "851261416931-qj21ldmidcijfaqpvnqetbu1dlovsk31.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
            });
        });
    }

    onSignInClick = () => {
       this.auth.signIn()
           .then(() => {
               this.props.signIn(this.auth)
               history.push("/")
           })
    }

    render() {
        return (
        <div>
            <button onClick = {this.onSignInClick}
                className="btn btn-danger btn-block">
                <i className="fa fa-google fa-lg float-left mt-1"/>
                {this.props.title} with Google
            </button>
            <div className={classes.line}>
                <span className="bg-white p-2">or</span>
            </div>
            <button
                onClick={() => this.props.setShowEmail(true)}
                className="btn btn-outline-secondary btn-block">
                {this.props.title} with Email
            </button>
        </div>)
    }
}

const StateToPropertyMapper = (state) => ({
    id: state.auth.userId
});

export default connect(StateToPropertyMapper, {signIn})(LoginWithGoogle);
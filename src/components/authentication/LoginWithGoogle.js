import React, {Component} from "react";
import classes from "./Authentication.module.css";
import {connect} from "react-redux";
import {signIn} from "../../actions/authActions";
import history from "../../history";
import {FcGoogle} from "react-icons/fc";

class LoginWithGoogle extends Component {

    // initialize google api library
    componentDidMount() {
        window.gapi.load("client: auth2", () => {
            window.gapi.client.init({
                clientId: "851261416931-qj21ldmidcijfaqpvnqetbu1dlovsk31.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
            });
        });
    }

    onSignInClick = () => {
        if (this.props.type === "login") {
            this.auth.signIn()
                .then(() => {
                    this.props.signIn(this.auth)
                    history.push("/")
                })
        } else if (this.props.type === "signup") {
            this.auth.signIn()
                .then(() => {
                    this.props.signIn(this.auth)
                    history.push("/usersignupinfo")
                })
        }
    }

    render() {
        return (
            <button onClick={this.onSignInClick}
                    className={classes.googleButton}>
                <FcGoogle size="30px"/>
            </button>)
    }
}

const StateToPropertyMapper = (state) => ({
    id: state.auth.userId
});

export default connect(StateToPropertyMapper, {signIn})(LoginWithGoogle);
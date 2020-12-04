import React, {Component} from "react";
import classes from "./Authentication.module.css";
import {connect} from "react-redux";
import {loginWithGoogle} from "../../actions/authActions";
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
        if (this.auth.isSignedIn.get()) {
            this.auth.signOut();
        }

        this.auth.signIn()
            .then(() => {
                const idToken = this.auth.currentUser.get().xc.id_token;
                this.props.dispatch(loginWithGoogle(idToken))
                    .then(() => {
                        this.auth.signOut()
                        if (this.props.googleRegister) {
                            history.push("/resetPassword")
                        } else {
                            history.push(this.props.preLocation);
                        }
                    })
            })
            .catch(
                error => {
                    history.push("/login")
                }
            )
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
    preLocation: state.auth.preLocation,
    googleRegister: state.auth.googleRegister
});

export default connect(StateToPropertyMapper)(LoginWithGoogle);
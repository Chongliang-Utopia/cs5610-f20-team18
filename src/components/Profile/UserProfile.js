import React from "react"
import LoggedInProfile from "./LoggedInProfile";
import UnloggedInProfile from "./UnLoggedInProfile";

class UserProfile extends React.Component {
    state = {
        userId: '',
        authenticated: true
    }

    componentDidMount() {
        // authenticate user here and update state variable
        this.setState(prevState => ({
            userId: this.props.match.params.userId,
            authenticated: true
        }))
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.authenticated &&
                    <LoggedInProfile
                        userId={this.state.userId}/>
                }

                {
                    !this.state.authenticated &&
                        <UnloggedInProfile
                            userId={this.state.userId}/>
                }
            </div>
        )
    }
}

export default UserProfile

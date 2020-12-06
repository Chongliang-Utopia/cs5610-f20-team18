import React from "react"
import LoggedInProfile from "./LoggedInProfile";
import PublicProfile from "./PublicProfile";
import {connect} from "react-redux";
import {
    switchSection,
    fetchBookPostingsForUser,
    fetchReviewsUserGave,
    fetchReviewsUserReceived,
    getReadingListForUser,
    fetchUserBorrowings,
    fetchUserLendings,
    fetchFollowers,
    fetchFollowings,
    authenticate
} from "../../actions/profileActions";
import UserActions from "../../actions/userActions";


class UserProfile extends React.Component {
    componentDidMount() {
        const uid = this.props.match.params.userId
        const section = this.props.match.params.section
        this.props.findUserById(uid)
        this.props.authenticate(uid, this.props.loggedInUser, this.props.isLoggedIn)
        if (this.props.isLoggedIn && this.props.user._id === this.props.loggedInUser._id) {
            this.props.fetchBookPostingsForUser(uid)
            this.props.fetchUserBorrowings(uid)
            this.props.fetchUserLendings(uid)
            this.props.fetchReviewsUserReceived(uid)
            this.props.fetchReviewsUserGave(uid)
            this.props.fetchFollowings(uid)
            this.props.fetchFollowers(uid)
            this.props.getReadingListForUser(uid)
        } else {
            this.props.fetchBookPostingsForUser(uid)
            this.props.fetchReviewsUserReceived(uid)
            this.props.fetchReviewsUserGave(uid)
            this.props.fetchFollowings(uid)
            this.props.fetchFollowers(uid)
        }
        this.props.switchSection(section)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const uid = this.props.match.params.userId
        const section = this.props.match.params.section
        if (section !== prevProps.match.params.section || uid !== prevProps.match.params.userId) {
            this.props.findUserById(uid)
            this.props.authenticate(uid, this.props.loggedInUser, this.props.isLoggedIn)
            if (this.props.isLoggedIn && this.props.user._id === this.props.loggedInUser._id) {
                this.props.fetchBookPostingsForUser(uid)
                this.props.fetchUserBorrowings(uid)
                this.props.fetchUserLendings(uid)
                this.props.fetchReviewsUserReceived(uid)
                this.props.fetchReviewsUserGave(uid)
                this.props.fetchFollowings(uid)
                this.props.fetchFollowers(uid)
                this.props.getReadingListForUser(uid)
            } else {
                this.props.fetchBookPostingsForUser(uid)
                this.props.fetchReviewsUserReceived(uid)
                this.props.fetchReviewsUserGave(uid)
                this.props.fetchFollowings(uid)
                this.props.fetchFollowers(uid)
            }
        }
        this.props.switchSection(section)
    }

    render() {
        return (
            <div className="container">
                {
                    this.props.authenticated && <LoggedInProfile/>
                }

                {
                    !this.props.authenticated && <PublicProfile/>
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    authenticated: state.profile.authenticated,
    loggedInUser: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn,
    user: state.profile.user
})

export default connect(stateToPropertyMapper,
    {
        findUserById: UserActions.findUserById,
        fetchBookPostingsForUser,
        fetchReviewsUserGave,
        fetchReviewsUserReceived,
        fetchUserLendings,
        fetchUserBorrowings,
        switchSection,
        fetchFollowers,
        fetchFollowings,
        getReadingListForUser,
        authenticate
    })(UserProfile)

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
    fetchLoggedInUserFollowings,
    authenticate
} from "../../actions/profileActions";
import UserActions from "../../actions/userActions";


class UserProfile extends React.Component {
    componentDidMount() {
        const uid = this.props.match.params.userId
        const section = this.props.match.params.section
        this.props.authenticate(uid, this.props.loggedInUser, this.props.isLoggedIn)
        if ((this.props.isLoggedIn && !uid) || (this.props.isLoggedIn && this.props.loggedInUser._id === uid)) {
            this.props.findUserById(this.props.loggedInUser._id)
            this.props.fetchBookPostingsForUser(this.props.loggedInUser._id)
            this.props.fetchUserBorrowings(this.props.loggedInUser._id)
            this.props.fetchUserLendings(this.props.loggedInUser._id)
            this.props.fetchReviewsUserReceived(this.props.loggedInUser._id)
            this.props.fetchReviewsUserGave(this.props.loggedInUser._id)
            this.props.fetchFollowings(this.props.loggedInUser._id)
            this.props.fetchFollowers(this.props.loggedInUser._id)
            this.props.getReadingListForUser(this.props.loggedInUser._id)
        } else if (this.props.isLoggedIn && uid) {
            this.props.findUserById(uid)
            this.props.fetchLoggedInUserFollowings(this.props.loggedInUser._id)
            this.props.fetchBookPostingsForUser(uid)
            this.props.fetchReviewsUserReceived(uid)
            this.props.fetchReviewsUserGave(uid)
            this.props.fetchFollowings(uid)
            this.props.fetchFollowers(uid)
            // not logged in at all
        } else {
            this.props.findUserById(uid)
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
            this.props.authenticate(uid, this.props.loggedInUser, this.props.isLoggedIn)
            if ((this.props.isLoggedIn && !uid) || (this.props.isLoggedIn && this.props.loggedInUser._id === uid)) {
                this.props.findUserById(this.props.loggedInUser._id)
                this.props.fetchBookPostingsForUser(this.props.loggedInUser._id)
                this.props.fetchUserBorrowings(this.props.loggedInUser._id)
                this.props.fetchUserLendings(this.props.loggedInUser._id)
                this.props.fetchReviewsUserReceived(this.props.loggedInUser._id)
                this.props.fetchReviewsUserGave(this.props.loggedInUser._id)
                this.props.fetchFollowings(this.props.loggedInUser._id)
                this.props.fetchFollowers(this.props.loggedInUser._id)
                this.props.getReadingListForUser(this.props.loggedInUser._id)
            } else if (this.props.isLoggedIn && uid) {
                this.props.findUserById(uid)
                this.props.fetchLoggedInUserFollowings(this.props.loggedInUser._id)
                this.props.fetchBookPostingsForUser(uid)
                this.props.fetchReviewsUserReceived(uid)
                this.props.fetchReviewsUserGave(uid)
                this.props.fetchFollowings(uid)
                this.props.fetchFollowers(uid)
                // not logged in at all
            } else {
                this.props.findUserById(uid)
                this.props.fetchBookPostingsForUser(uid)
                this.props.fetchReviewsUserReceived(uid)
                this.props.fetchReviewsUserGave(uid)
                this.props.fetchFollowings(uid)
                this.props.fetchFollowers(uid)
            }
            this.props.switchSection(section)
        }
    }

    render() {
        return (
            <div className="container">
                {this.props.isLoggedIn && this.props.loggedInUser._id === this.props.user._id ?
                <LoggedInProfile/> : <PublicProfile/>}
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
        fetchLoggedInUserFollowings,
        getReadingListForUser,
        authenticate,
    })(UserProfile)

import React from "react"
import LoggedInProfile from "./LoggedInProfile";
import PublicProfile from "./PublicProfile";
import {connect} from "react-redux";
import {
    fetchUser,
    switchSection,
    fetchBookPostingsForUser,
    fetchReviewsUserGave,
    fetchReviewsUserReceived,
    fetchTransactionsForUser,
    fetchFollowers,
    fetchFollowings
} from "../../actions/profileActions";


class UserProfile extends React.Component {
    componentDidMount() {
        const uid = this.props.match.params.userId
        const section = this.props.match.params.section
        // TODO: fetch all data here, implement these and un-comment
        // this.props.fetchUser(uid)
        // this.props.fetchBookPostingsForUser(uid)
        // this.props.fetchTransactionsForUser(uid)
        // this.props.fetchReviewsForUser(uid)
        // this.props.fetchReviewsUserGave(uid)
        // this.props.fetchFollowings(uid)
        // this.props.fetchFollowers(uid)
        // TODO: need to deal with authentication here
        this.props.switchSection(section)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const uid = this.props.match.params.userId
        const section = this.props.match.params.section
        if (section !== prevProps.match.params.section || uid !== prevProps.match.params.userId) {
            // TODO: fetch all data here, implement these and un-comment
            // this.props.fetchUser(uid)
            this.props.switchSection(section)
            // this.props.fetchUser(uid)
            // this.props.fetchBookPostingsForUser(uid)
            // this.props.fetchTransactionsForUser(uid)
            // this.props.fetchReviewsForUser(uid)
            // this.props.fetchReviewsUserGave(uid)
            // this.props.fetchFollowings(uid)
            // this.props.fetchFollowers(uid)
            }
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
})

export default connect(stateToPropertyMapper,
    {
        fetchUser,
        fetchBookPostingsForUser,
        fetchReviewsUserGave,
        fetchReviewsUserReceived,
        fetchTransactionsForUser,
        switchSection,
        fetchFollowers,
        fetchFollowings
    })(UserProfile)

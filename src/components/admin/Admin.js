import React from "react";
import {Link} from "react-router-dom";
import AdminAccountSettingComponent from "./Components/AdminAccountSettingComponent";
import AdminLandingPageComponent from "./Components/AdminLandingPageComponent";
import UserAccountsComponent from "./Components/UserAccountsComponent";
import UserTicketsComponent from "./Components/UserTicketsComponent";
import classes from "./admin.module.css";
import {BsCaretRightFill} from "react-icons/bs";
import {connect} from "react-redux";
import {switchSections,fetchAdminUser, fetchAllUsers, fetchUserTickets, fetchAllPostings, findAllSubscriptions} from "../../actions/adminActions";
import AllBookPostings from "./Components/AllBookPostingsComponent";
import EmailSubscriberComponent from "./Components/EmailSubscriberComponent";

class Admin extends React.Component{

    componentDidMount() {
        //console.log('didmount')
        const section = this.props.match.params.section
        this.props.switchSections(section)
        //TODO: implement to update numbers
        // this.props.fetchMemberNumber()
        // this.props.fetchPostingNumber()
        // this.props.fetchTicketNumber()

        //TODO: fetch admin user object
        this.props.fetchAdminUser(this.props.currentUser)

        //TODO: fetch user tickets
        this.props.fetchUserTickets()

        //TODO: fetch all users
        this.props.fetchAllUsers()

        //TODO: fetch all books
        this.props.fetchAllPostings()

        this.props.findAllSubscriptions()

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log('didupdate')
        // authenticate user here and update state variable??
        const section = this.props.match.params.section
        if (section !== prevProps.match.params.section) {
            this.props.switchSections(section)
            if (!section) {
                //TODO: implement to update numbers
                // this.props.fetchMemberNumber()
                // this.props.fetchPostingNumber()
                // this.props.fetchTicketNumber()
            }
            if (section === "settings") {
                //TODO: fetch admin user object
                this.props.fetchAdminUser(this.props.currentUser)
            }
            if (section === "tickets") {
                //TODO: fetch user tickets
                this.props.fetchUserTickets()
            }
            if (section === "users") {
                //TODO: fetch all users
                this.props.fetchAllUsers()
            }
            if (section === "postings") {
                // TODO: fetch all book
                this.props.fetchAllPostings()
            }
            if (section === "email-subscribers") {
                this.props.findAllSubscriptions()
            }
        }

    }

    render() {
        return (
            <div className="container">
                <div className="row add-top-margin add-15-padding">
                    <div className="col-lg-2">
                        <img className="image"
                             src="https://www.kindpng.com/picc/m/23-236356_administrator-admin-icon-admin-icons-hd-png-download.png"
                             alt="profile-image"
                        />
                    </div>
                    <div className="col-lg-5 add-35-top-margin font-size-25-italic">
                        <span className="add-15-padding">Welcome back, administrator!</span>
                    </div>

                </div>
                <br/>

                <div className={"row " + classes.adminDiv}>
                    <div className={"col-md-4 col-lg-3 " + classes.leftSideBar}>

                        <div className="nav nav-pills mb-3">
                            <li className="nav-item">
                                <Link to={`/admin`} className="nav-link">
                                    {!this.props.section && <BsCaretRightFill className="mb-1 mr-1"/>}
                                    Profile Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/admin/settings`} className="nav-link">
                                    {this.props.section === "settings" && <BsCaretRightFill className="mb-1 mr-1"/>}
                                    Account Settings
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/admin/tickets`} className="nav-link">
                                    {this.props.section === 'tickets' && <BsCaretRightFill className="mb-1 mr-1"/>}
                                    User Tickets
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/admin/users`} className="nav-link">
                                    {this.props.section === 'users' && <BsCaretRightFill className="mb-1 mr-1"/>}
                                    User Accounts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/admin/postings`} className="nav-link">
                                    {this.props.section === 'postings' && <BsCaretRightFill className="mb-1 mr-1"/>}
                                    Book Postings
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/admin/email-subscribers`} className="nav-link">
                                    {this.props.section === 'email-subscribers' && <BsCaretRightFill className="mb-1 mr-1"/>}
                                    Email Subscribers
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className={"col-md-8 col-lg-9 pr-4 " + classes.contentDiv}>
                        {
                            typeof this.props.section === 'undefined' &&
                            <AdminLandingPageComponent/>
                        }
                        {
                            this.props.section === "settings" &&
                            <AdminAccountSettingComponent/>
                        }
                        {
                            this.props.section === "tickets" &&
                            <UserTicketsComponent/>
                        }
                        {
                            this.props.section === "users" &&
                            <UserAccountsComponent/>
                        }
                        {
                            this.props.section === "postings" &&
                                <AllBookPostings/>
                        }
                        {
                            this.props.section === "email-subscribers" &&
                            <EmailSubscriberComponent />
                        }
                    </div>
                </div>
            </div>
        )
    }

}

const stateToPropertyMapper = (state) => ({
    section: state.admin.section,
    currentUser: state.auth.user
})

export default connect (
    stateToPropertyMapper,
    {switchSections, fetchAdminUser, fetchAllUsers, fetchUserTickets, fetchAllPostings, findAllSubscriptions})(Admin);

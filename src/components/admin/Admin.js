import React from "react";
import {Link} from "react-router-dom";
import AdminAccountSettingComponent from "./Components/AdminAccountSettingComponent";
import AdminLandingPageComponent from "./Components/AdminLandingPageComponent";
import UserAccountsComponent from "./Components/UserAccountsComponent";
import UserTicketsComponent from "./Components/UserTicketsComponent";

class Admin extends React.Component{
    state = {
        section: '',
        tickets: [
            {
                reporterId: "melanie12",
                bookTitle: "How to fake your application to graduate school",
                reviewerId: "phoebe23",
                revieweeId: "harry67",
                description: "this book is teaching people how to fake their application. " +
                    "Please delete this book. It's a highly unethical thing to do!!!!"
            },
            {
                reporterId: "mel89",
                reviewerId: "phoebe23",
                revieweeId: "harry67",
                bookTitle: "1587, a year of no significance",
                description: "phoebe23 insulted harry67 by saying \"go to hell, you suck! \"" +
                    "I think this is highly inappropriate. Please warn phoebe23."
            },
            {
                reporterId: "april419",
                reviewerId: "phoebe23",
                revieweeId: "harry67",
                bookTitle: "Python for Dummies",
                description: "phoebe23 said the book owner is an idiot for no reason. Please" +
                    " ban phoebe23"
            }
        ],
        users : [
            {
                username: "april",
                status: "ACTIVE"
            },
            {
                username: "phoebe23",
                status: "INACTIVE"
            },
            {
                username: "melanie89",
                status: "ACTIVE"
            }
        ]
    }

    componentDidMount() {
        const section = this.props.match.params.section
        this.setState({
            section: section
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // authenticate user here and update state variable??
        const section = this.props.match.params.section
        if (section !== prevProps.match.params.section) {
            this.setState(prevState => ({
                section: section
            }))
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row add-top-margin add-15-padding">
                    <div className="col-lg-2">
                        <img className="image" src="https://www.kindpng.com/picc/m/23-236356_administrator-admin-icon-admin-icons-hd-png-download.png"
                             alt="profile-image"
                        />
                    </div>
                    <div className="col-lg-5 add-35-top-margin font-size-25-italic">
                        <span className="add-15-padding">Welcome back, administrator!</span>
                    </div>

                </div>
                <br/>
                <div className="row">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <Link to ={`/admin`} className="nav-link">
                                Profile Home
                            </Link>
                            <Link to ={`/admin/settings`} className="nav-link">
                                Account Settings
                            </Link>
                            <Link to ={`/admin/tickets`} className="nav-link">
                                User Tickets
                            </Link>
                            <Link to ={`/admin/users`} className="nav-link">
                                User Accounts
                            </Link>
                        </div>
                    </div>
                    <div className="col-9">
                        {
                            typeof this.state.section === 'undefined' &&
                            <AdminLandingPageComponent/>
                        }
                        {
                            this.state.section === "settings" &&
                            <AdminAccountSettingComponent/>
                        }
                        {
                            this.state.section === "tickets" &&
                            <UserTicketsComponent
                                tickets={this.state.tickets}/>
                        }
                        {
                            this.state.section === "users" &&
                            <UserAccountsComponent
                                users={this.state.users}/>
                        }
                    </div>
                </div>
            </div>
        )
    }

}


export default Admin;

import React from "react"
import LoggedInProfile from "./LoggedInProfile";
import UnloggedInProfile from "./PublicProfile";


class UserProfile extends React.Component {
    state = {
        userId: '',
        authenticated: false,
        section: "",
        // TODO: query bookItem to retrieve books this person owns
        bookPostings:
            [
                {
                    title: "Harry Potter and the chamber of Secrets",
                    bookCondition: "Good",
                    src: "/books/book1.webp"
                },
                {
                    title: "Harry Potter and the Goblet of Fire",
                    bookCondition: "Like New",
                    src: "/books/book2.webp"
                }
            ],
        requests: [
            {
                userName: "ILoveBooks1989",
                userRating: 5,
                location: "San Jose",
                bookTitle:"harry potter",
                status: "pending"
            },
            {
                userName: "bayAreaReader",
                userRating: 3,
                location: "San Francisco",
                bookTitle: "lord of the rings",
                status: "approved"
            },
            {
                userName: "goodhedgey58",
                userRating: 3,
                location: "Mountain View",
                bookTitle: "lord of the fly",
                status: "declined"
            }
        ],
        reviews: [
            {
                userName: "MrPerfectionist",
                bookTitle: "Harry Potter and the chamber of Secrets",
                userRating: 1,
                content: "This book is not in good condition at all. The owner should take good care of his/her books!!! I would" +
                    "not borrow from this lender ever again!!!"
            },
            {
                userName: "MrGoodEnough",
                bookTitle: "Harry Potter and the Goblet of Fire",
                userRating: 5,
                content: "A good book and a very helpful lender. I would recommend aprilz to anyone who wants to lend."
            },
        ],
        userRating: 3
    }

    componentDidMount() {
        // authenticate user here and update state variable
        const userId = this.props.match.params.userId
        const section = this.props.match.params.section
        this.setState(prevState => ({
            userId: userId,
            authenticated: false,
            section: section,
        }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // authenticate user here and update state variable??
        const userId = this.props.match.params.userId
        const section = this.props.match.params.section
        if (section !== prevProps.match.params.section || userId !== prevProps.match.params.userId) {
            this.setState(prevState => ({
                userId: userId,
                authenticated: false,
                section: section
            }))
        }
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.authenticated &&
                    <LoggedInProfile
                        userId={this.state.userId}
                        userRating={this.state.userRating}
                        section={this.state.section}
                        bookPostings={this.state.bookPostings}
                        requests={this.state.requests}
                        reviews={this.state.reviews}
                    />
                }

                {
                    !this.state.authenticated &&
                        <UnloggedInProfile
                            userId={this.state.userId}
                            userRating={this.state.userRating}
                            section={this.state.section}
                            bookPostings={this.state.bookPostings}
                            reviews={this.state.reviews}
                        />
                }
            </div>
        )
    }
}

export default UserProfile

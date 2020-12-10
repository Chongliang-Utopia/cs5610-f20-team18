import React from "react";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import {GrBook} from "react-icons/gr";
import classes from "./LenderTable.module.css";
import {connect} from "react-redux";
import BookActions from "../../../actions/bookActions";
import {requestLogin} from "../../../actions/authActions";
import {Link} from "react-router-dom";

class LenderTable extends React.Component {

    renderCondition(condtion) {
        switch (condtion) {
            case "LIKE_NEW":
                return <span>Like New</span>
            case "VERY_GOOD":
                return <span>Very Good</span>
            case "GOOD":
                return <span>Good</span>
            case "ACCEPTABLE":
                return <span>Acceptable</span>
            default:
                return null
        }
    }

    render() {
        return (
            <div className={"col-12 " + classes.LenderTable}>

                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Condition</th>
                        <th>Location</th>
                        <th>Lender Information</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.borrowingOptions && this.props.borrowingOptions.map((book, index) =>
                        <tr key={index}>
                            <td>{this.renderCondition(book.condition)}</td>
                            <td>{book.user.city}, {book.user.state}</td>
                            <td>
                                <Link className="nav-link" to={`/profile/${book.user._id}`}>
                                    <span className="mr-1">{book.user.username}</span>
                                    <Rating initialRating={book.user.rating} readonly
                                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                </Link>
                            </td>
                            <td>
                                {book.isAvailable ?
                                    <button className="btn btn-warning btn-sm"
                                            disabled={this.props.user && book.user._id === this.props.user._id}
                                            onClick={() => {
                                                if (!this.props.isLoggedIn) {
                                                    this.props.requestLogin(window.location.pathname)
                                                } else {
                                                    this.props.startABorrowingRequest({
                                                        ...book.user,
                                                        bookCondition: book.condition,
                                                        bookId: book._id
                                                    })
                                                }
                                            }}>
                                        <GrBook className="mr-2 mb-1"/>
                                        Borrow
                                    </button> :
                                    < button className="btn btn-outline-secondary btn-sm" disabled>
                                        Not Available
                                    </button>
                                }
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    borrowingOptions: state.bookDetail.borrowingOptions,
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn
})

const propertyToDispatchMapper = (dispatch) => ({
    startABorrowingRequest: (lender) => BookActions.startABorrowingRequest(dispatch, lender),
    requestLogin: (location) => requestLogin(dispatch, location)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(LenderTable);


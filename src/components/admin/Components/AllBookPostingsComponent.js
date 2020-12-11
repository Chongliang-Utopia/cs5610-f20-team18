import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Rating from "react-rating";
import {BsArchive} from "react-icons/bs"
import {deletePosting} from "../../../actions/adminActions";
import {deactivateBook} from "../../../actions/adminActions";
import ReactHtmlParser from "react-html-parser";

class AllBookPostings extends React.Component {

    render() {
        return (
            <div>
                <h2>Active Book Postings</h2>
                <div className={classes.LenderTable}>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>title</th>
                            <th>Owner</th>
                            <th>Rating</th>
                            <th>Description</th>
                            <th>Deactivate</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.AllBooks.map((book, index) =>
                                <tr key={index}>
                                    <td>
                                        <Link to={`/details/${book.googleBookId}`} className="mr-1">{book.title}</Link>
                                    </td>
                                    <td>
                                        <Link to={`/profile/${book.user._id}`}
                                              className="mr-1">{book.user.username}</Link>
                                    </td>
                                    <td>
                                        <Rating initialRating={book.user.rating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        <div className={classes.bookDescriptionText}>
                                            {ReactHtmlParser(book.description)}
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-warning btn-sm border-0 float-right"
                                                title="Deactivate book"
                                                onClick={() => this.props.deactivateBook(book._id, {
                                                    googleBookId: book.googleBookId,
                                                    title: book.title,
                                                    user: book.user,
                                                    description: book.description,
                                                    isActive: false
                                                })}>
                                            <BsArchive/>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <h2 className="mt-3">Inactive Book Postings</h2>
                <div className={classes.LenderTable}>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>title</th>
                            <th>Owner</th>
                            <th>Rating</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.inActiveBooks.map((book, index) =>
                                <tr key={index}>
                                    <td>
                                        <Link to={`/details/${book.googleBookId}`} className="mr-1">{book.title}</Link>
                                    </td>
                                    <td>
                                        <Link to={`/profile/${book.user._id}`}
                                              className="mr-1">{book.user.username}</Link>
                                    </td>
                                    <td>
                                        <Rating initialRating={book.user.rating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        <div className={classes.bookDescriptionText}>
                                            {ReactHtmlParser(book.description)}
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    users: state.admin.users,
    AllBooks: state.admin.AllBooks,
    inActiveBooks: state.admin.inActiveBooks
})

export default connect(stateToPropertyMapper, {deletePosting, deactivateBook})(AllBookPostings)

import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Rating from "react-rating";
import {BsTrash} from "react-icons/bs"
import DeletePosting from "../../Profile/Components/DeletePosting";
import {deletePosting} from "../../../actions/adminActions";
import Modal from "../../UI/modal/Modal";
import ReactHtmlParser from "react-html-parser";

class AllBookPostings extends React.Component{
    state = {
        deleting: false,
        bookBeingEdited: {},
    }

    deleteBook = (book) => {
        this.setState({
            deleting: true,
            bookBeingEdited: book
        })
    }

    cancelDelete = () => {
        this.setState({
            deleting: false,
            bookBeingEdited: {}
        })
    }

    render() {
        return (
            <div>
                <Modal show={this.state.deleting} modalClosed={this.cancelDelete}>
                    <DeletePosting
                        book={this.state.bookBeingEdited}
                        cancelDelete={this.cancelDelete}
                        deletePosting={this.props.deletePosting}
                    />
                </Modal>
                <h2>All Book Postings</h2>
                <div className={classes.LenderTable}>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>title</th>
                            <th>Owner</th>
                            <th>Rating</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.AllBooks.map(book=>
                                <tr>
                                    <td>
                                        <Link to={`/books/${book.googleBookId}`} className="mr-1">{book.title}</Link>
                                    </td>
                                    <td>
                                        <Link to={`/users/${book.user._id}/profile`} className="mr-1">{book.user.username}</Link>
                                    </td>
                                    <td>
                                        <Rating initialRating={book.user.rating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        {
                                            book.isActive? "Active": "Inactive"
                                        }
                                    </td>
                                    <td>
                                        {/*{ReactHtmlParser(book.description)}*/}
                                        {
                                            ReactHtmlParser(book.description).length > 15 && ReactHtmlParser(book.description).substring(0, 15)
                                        }
                                        {
                                            ReactHtmlParser(book.description).length > 15 && "..."
                                        }
                                        {
                                            ReactHtmlParser(book.description).length <= 15 && ReactHtmlParser(book.description)
                                        }
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-danger btn-sm border-0 float-right" title="Report"
                                                onClick={() => this.deleteBook(book)}>
                                            <BsTrash/>
                                        </button>
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
    AllBooks: state.admin.AllBooks
})

export default connect(stateToPropertyMapper, {deletePosting})(AllBookPostings)

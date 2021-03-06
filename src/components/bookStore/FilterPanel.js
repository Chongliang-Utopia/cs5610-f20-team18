import React from "react";
import classes from "./filterPanel.module.css";
import Rating from "react-rating";
import {connect} from "react-redux";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import {filterBookByRating, sortBookHighToLow,
    sortBookPublisherDate, getRecommendedBooks} from "../../actions/searchBookActions"
import history from "../../history";

class FilterPanel extends React.Component {

    setRecommended = () => {
        history.push(`/books`)
    }

    render() {
        return (
            <div className={classes.filterPanel}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <p><b>Editor recommends:</b></p>
                        <button className={`btn btn-link ${classes.filterLink}`}
                        onClick={() => {
                            this.setRecommended()
                        }}>
                            Most Popular
                        </button>
                    </li>
                    <li className="list-group-item">
                        <p><b>Sort By:</b></p>
                        <div>
                            <div className={`${classes.ratingBar}`}>
                                - Rating:
                            </div>
                            <button className={`btn btn-link ${classes.filterLink}`}
                                onClick={() => this.props.sortBook()}>
                                 high -> low
                            </button>
                        </div>
                        <br/>
                        <div>
                            <div className={`${classes.ratingBar}`}>
                                - Published Date:
                            </div>
                            <button className={`btn btn-link ${classes.filterLink}`}
                               onClick={() => this.props.sortBookPublisher()}>
                                 Newest -> oldest
                            </button>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="">
                            <p><b>Filter By:</b></p>
                            <div className={`${classes.ratingBar}`}>
                                - Avg. Book Rating:
                            </div>
                            <div>
                                <button className={`btn btn-link ${classes.filterLink}`}
                                   onClick={() => this.props.filterBook(4)}>
                                    <span className={`${classes.rating}`}>
                                    <Rating initialRating="4" readonly
                                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                   </span>
                                    & up
                                </button>
                            </div>
                            <div>
                                <button className={`btn btn-link ${classes.filterLink}`}
                                   onClick={() => this.props.filterBook(3)}>
                                    <span className={`${classes.rating}`}>
                                    <Rating initialRating="3" readonly
                                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                   </span>
                                    & up
                                </button>
                            </div>
                            <div>
                                <button className={`btn btn-link ${classes.filterLink}`}
                                   onClick={() => this.props.filterBook(2)}>
                                    <span className={`${classes.rating}`}>
                                    <Rating initialRating="2" readonly
                                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                   </span>
                                    & up
                                </button>
                            </div>
                            <div>
                                <button className={`btn btn-link ${classes.filterLink}`}
                                   onClick={() => this.props.filterBook(1)}>
                                    <span className={`${classes.rating}`}>
                                    <Rating initialRating="1" readonly
                                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                   </span>
                                    & up
                                </button>
                            </div>
                            <div>
                                <button className={`btn btn-link ${classes.filterLink}`}
                                   onClick={() => this.props.filterBook(0)}>Show All
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        )
    }
}


const stateToPropertyMapper = (state) => ({
    books: state.searchBookReducer.books,
})

const propertyToDispatchMapper = (dispatch) => ({
    filterBook: (number) => filterBookByRating(dispatch, number),
    sortBook: () => sortBookHighToLow(dispatch),
    sortBookPublisher: () => sortBookPublisherDate(dispatch),
    getRecommended: () => getRecommendedBooks(dispatch),
})
export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(FilterPanel)

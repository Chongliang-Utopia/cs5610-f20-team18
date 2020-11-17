import React from "react";
import classes from "./bookStore.module.css"
import SearchBook from "./searchBook";

class BookStore extends React.Component {

    render() {
        return (
            <div className={`${classes.BookStore} container`}>
                <h4>Our</h4>
                <h1><b>BOOKSTORE</b></h1>
                <div className="row">
                    <div className="col-md-3">
                        <div className={classes.filterPanel}>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <h5>Filter By</h5>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Newest
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Most popular
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">
                                        Highest rated
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <div className="">
                                        <label htmlFor="formControlRange">
                                            Minimum Rating:
                                        </label>
                                        <input type="range" className="form-control-range"
                                               min="0" max="5" step="1"
                                               id="formControlRange"/>
                                        <div className="row">
                                            <div className="col-6">
                                                1 star
                                            </div>
                                            <div className="col-6">
                                                <p className="pull-right">
                                                    5 stars
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <SearchBook/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookStore

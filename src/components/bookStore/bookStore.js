import React from "react";
import classes from "./bookStore.module.css"
import SearchBook from "./searchBook";

class BookStore extends React.Component {

    render() {
        return (
            <div className={`${classes.BookStore} container`}>
                <div className="row">
                    <div className="col-3">
                        <div className="filter-panel">
                            <h4>Filter By</h4>
                        </div>
                    </div>
                    <div className="col-9">
                        <h4>Our</h4>
                        <h1><b>BOOKSTORE</b></h1>
                        <SearchBook/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookStore

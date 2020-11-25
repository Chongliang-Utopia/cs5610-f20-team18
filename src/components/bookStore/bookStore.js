import React from "react";
import classes from "./filterPanel.module.css"
import SearchBook from "./searchBook";
import FilterPanel from "./FilterPanel"
class BookStore extends React.Component {

    render() {
        return (
            <div className={`${classes.BookStore} container`}>
                <h4>Our</h4>
                <h1><b>BOOKSTORE</b></h1>
                <div className="row">
                    <div className="col-md-4 col-lg-3">
                        <FilterPanel/>
                    </div>
                    <div className="col-md-8 col-lg-9">
                        <SearchBook/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookStore

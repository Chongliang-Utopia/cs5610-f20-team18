import React from "react";
import classes from "./filterPanel.module.css"
import SearchBook from "./searchBook";
import FilterPanel from "./FilterPanel"
import {connect} from "react-redux";
import {searchBook} from "../../actions/searchBookActions"
class BookStore extends React.Component {
    componentDidMount() {
        this.props.searchBook('Harry potter', '', '', '', '', '')
    }
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
const stateToPropertyMapper = (state) => ({
})

const propertyToDispatchMapper = (dispatch) => ({
    searchBook: (search_default_term, author, title, isbn, publisher, subject) =>
        searchBook(dispatch, search_default_term, author, title, isbn, publisher, subject)
})
export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(BookStore)

// export default BookStore

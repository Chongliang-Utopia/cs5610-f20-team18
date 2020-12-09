import React from "react";
import classes from "./filterPanel.module.css"
import SearchBook from "./searchBook";
import FilterPanel from "./FilterPanel"
import {connect} from "react-redux";
import {getRecommendedBooks, setBookSearchCriteria, setSearchDefaultTerm,
    searchBookByCriteria, clearSearchKeywords} from "../../actions/searchBookActions";

class BookStore extends React.Component {
    componentDidMount() {
        // if (this.props.search_default_term) {
        //     this.props.searchBook(this.props.search_default_term)
        // } else {
        //     this.props.getRecommended();
        // }
        if (this.props.match.params.criteria) {
            this.props.setSearchDefaultTerm(this.props.match.params.criteria);
            this.props.searchBookByCriteria(this.props.match.params.criteria);
        } else {
            this.props.getRecommended();
            this.props.clearSearchKeywords();
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.criteria !== this.props.match.params.criteria) {
            if (this.props.match.params.criteria) {
                this.props.setBookSearchCriteria(this.props.match.params.criteria);
                this.props.searchBookByCriteria(this.props.match.params.criteria);
            } else {
                this.props.getRecommended();
                this.props.clearSearchKeywords();
            }
        }
    }


    render() {
        return (
            <div className={`${classes.BookStore} container`}>
                <h4 className={classes.our}>Our</h4>
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
    search_default_term: state.searchBookReducer.search_default_term,
    criteria: state.searchBookReducer.criteria
})

const propertyToDispatchMapper = (dispatch) => ({
    // searchBook: (search_default_term, author, title, isbn, publisher, subject) =>
    //     searchBook(dispatch, search_default_term, author, title, isbn, publisher, subject),
    getRecommended: () => getRecommendedBooks(dispatch),
    setBookSearchCriteria: (criteria) => setBookSearchCriteria(dispatch, criteria),
    searchBookByCriteria: (criteria) => searchBookByCriteria(dispatch, criteria),
    clearSearchKeywords: () => clearSearchKeywords(dispatch),
    setSearchDefaultTerm: (term) => setSearchDefaultTerm(dispatch, term)
})
export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(BookStore)

// export default BookStore

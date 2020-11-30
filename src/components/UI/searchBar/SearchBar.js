import React from "react";
import {connect} from "react-redux";
import history from "../../../history";
import classes from "./SearchBar.module.css";

import {setSearchDefaultTerm} from "../../../actions/searchBookActions"

const SearchBar = ({setSearchDefaultTerm}) => (
    <div className={classes.SearchBar}>
        <form className={classes.search}>
            <input type="text" className={classes.searchTerm} placeholder="Search books" onChange={(e) => setSearchDefaultTerm(e.target.value)}/>
            <button type="submit" onClick={(e) => {e.preventDefault()
            history.push('/bookstore')}} className={classes.searchButton}><i className="fa fa-search"/></button>
        </form>
    </div>
)

const propertyToDispatchMapper = (dispatch) => ({
    setSearchDefaultTerm: (term) => setSearchDefaultTerm(dispatch, term),
})

export default connect(undefined, propertyToDispatchMapper)(SearchBar);

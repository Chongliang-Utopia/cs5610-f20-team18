import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import classes from "./SearchBar.module.css";

import {setSearchDefaultTerm} from "../../../actions/searchBookActions"

const SearchBar = ({setSearchDefaultTerm}) => (
    <div className={classes.SearchBar}>
        <div className={classes.search}>
            <input type="text" className={classes.searchTerm} placeholder="Search books" onChange={(e) => setSearchDefaultTerm(e.target.value)}/>
            <Link to='/bookstore' className={classes.searchButton}><i className="fa fa-search"/></Link>
        </div>
    </div>
)

const propertyToDispatchMapper = (dispatch) => ({
    setSearchDefaultTerm: (term) => setSearchDefaultTerm(dispatch, term),
})

export default connect(undefined, propertyToDispatchMapper)(SearchBar);

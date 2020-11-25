import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () =>
    <div className={classes.SearchBar}>
        <div className={classes.search}>
            <input type="text" className={classes.searchTerm} placeholder="Search books" />
                <button type="submit" className={classes.searchButton}>
                    <i className="fa fa-search" />
                </button>
        </div>
    </div>

export default SearchBar;
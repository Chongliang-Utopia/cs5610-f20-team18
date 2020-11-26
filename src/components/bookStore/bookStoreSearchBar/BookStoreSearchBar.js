import React, {useState} from "react";
import classes from "./BookStoreSearchBar.module.css"
import {MdExpandMore, MdExpandLess} from "react-icons/md"

const BookStoreSearchBar = () => {

    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

    return (
    <div className={classes.BookStoreSearchBar}>
        <div className = {classes.BookStoreSearchDiv}>
            <div className={classes.search}>
                <input type="text" className={classes.searchInput} placeholder="Search books" />
                <button type="submit" className={classes.searchButton}>
                    <i className="fa fa-search" />
                </button>
            </div>
            {!showAdvancedSearch?
                <button onClick={() => setShowAdvancedSearch(true)}
                        className={classes.advancedButton}>
                    Advanced
                    <MdExpandMore/>
                </button> :
                <button onClick={() => setShowAdvancedSearch(false)}
                className={classes.advancedButton}>
                Hide
                <MdExpandLess />
                </button>
            }
        </div>
        {showAdvancedSearch &&
            <div className={classes.advancedSearchDiv}>
                <div className="form-group row">
                    <label htmlFor="keywords" className="col-sm-3 pt-2">Keywords</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="keywords"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Author" className="col-sm-3 pt-2 text-dark">Author</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="Author"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Title" className="col-sm-3 pt-2 text-dark">Title</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="Title"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="ISBN" className="col-sm-3 pt-2 text-dark">ISBN</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="ISBN"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Publisher" className="col-sm-3 pt-2 text-dark">Publisher</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="Publisher"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Subject" className="col-sm-3 pt-2 text-dark">Subject</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="Subject"/>
                    </div>
                </div>
                <button className="btn btn-info float-right">
                    Search
                </button>
            </div>
        }
    </div>
)}



export default BookStoreSearchBar;
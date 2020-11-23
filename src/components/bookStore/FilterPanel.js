import React from "react";
import classes from "./filterPanel.module.css";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";

class FilterPanel extends React.Component {

    filterBook = (number) => {
        alert("clicked rating filter: " + number)
    }
    render() {
        return (
            <div className={classes.filterPanel}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <p><b>Editor recommends:</b></p>
                        <a href="">
                            Most Popular
                        </a>
                    </li>
                    <li className="list-group-item">
                        <p><b>Sort By:</b></p>
                        <a href="">
                            Rating high -> low
                        </a>
                    </li>
                    <li className="list-group-item">
                        <div className="">
                            <p><b>Filter By:</b></p>
                            <div className={`${classes.ratingBar}`}>
                                Avg. Book Rating:
                            </div>
                            <div>
                                <a href=""
                                   onClick={() => this.filterBook(4)}>
                                    <span className={`${classes.rating}`}>
                                    <Rating initialRating="4" readonly
                                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                   </span>
                                    & up
                                </a>
                            </div>
                            <div>
                                <a href=""
                                   onClick={() => this.filterBook(3)}>
                                    <span className={`${classes.rating}`}>
                                    <Rating initialRating="3" readonly
                                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                   </span>
                                    & up
                                </a>
                            </div>
                            <div>
                                <a href=""
                                   onClick={() => this.filterBook(2)}>
                                    <span className={`${classes.rating}`}>
                                    <Rating initialRating="2" readonly
                                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                   </span>
                                    & up
                                </a>
                            </div>
                            <div>
                                <a href=""
                                   onClick={() => this.filterBook(1)}>
                                    <span className={`${classes.rating}`}>
                                    <Rating initialRating="1" readonly
                                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                   </span>
                                    & up
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        )
    }
}

export default FilterPanel

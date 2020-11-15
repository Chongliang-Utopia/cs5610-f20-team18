import React from "react";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import {GrBook} from "react-icons/gr";
import classes from "./LenderTable.module.css";

const LenderTable = ({borrowingHandler}) => {

    const lenders = [
        {
            username: "Tom Hanks",
            city: "San Jose",
            state: "CA",
            userRating: 4.5,
            bookCondition: "Good"
        },
        {
            username: "Jeff Bezos",
            city: "Seattle",
            state: "WA",
            userRating: 3.5,
            bookCondition: "Like New"
        }
    ]

    return (
        <div className={"col-12 " + classes.LenderTable}>

        <table className="table table-hover">
            <thead>
            <tr>
                <th>Condition</th>
                <th>Location</th>
                <th>Lender Information</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {   lenders.map(lender =>
                <tr>
                    <td>{lender.bookCondition}</td>
                    <td>{lender.city}, {lender.state}</td>
                    <td>
                        <span className="mr-1">{lender.username}</span>
                        <Rating initialRating={lender.userRating} readonly
                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                    </td>
                    <td>
                        <button className="btn btn-warning btn-sm"
                                onClick={() => borrowingHandler(lender)}>
                            <GrBook className="mr-2 mb-1"/>
                            Borrow
                        </button>
                    </td>
                </tr>)
            }
            </tbody>
        </table>
        </div>
    )
}

export default LenderTable;


import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import {GrBook} from "react-icons/gr";
import {Link} from "react-router-dom";

const RequestManageComponent = ({requests}) =>
    <div className={classes.LenderTable}>

        <table className="table table-hover">
            <thead>
            <tr>
                <th>User Name</th>
                <th>Rating</th>
                <th>Location</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {   requests.map(request =>
                <tr>
                    <td>
                        <Link to={`/users/${request.userName}/profile`} className="mr-1">{request.userName}</Link>
                    </td>
                    <td>
                        <Rating initialRating={request.userRating} readonly
                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                    </td>
                    <td>
                        <span>{request.location}</span>
                    </td>
                    <td>
                        <button className="btn btn-success">Approve</button>
                        <button className="btn btn-danger">Decline</button>
                    </td>
                </tr>)
            }
            </tbody>
        </table>
    </div>

export default RequestManageComponent

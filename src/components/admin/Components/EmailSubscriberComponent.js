import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {connect} from "react-redux";
import {BsTrash} from "react-icons/bs";
import {unsubscribe} from "../../../actions/adminActions";

const EmailSubscriberComponent =
    ({
         subscriptions=[],
        unsubscribe
     }) =>
        <div>
            <h2>Email Subscribers</h2>
            <div className={classes.LenderTable}>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Email</th>
                        <th><span className="float-right">Unsubscribe</span></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        subscriptions.map((subscription, index)=>
                            <tr key={index}>
                                <td>
                                    {subscription.email}
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm border-0 float-right" title="unsubscribe"
                                            onClick={() => unsubscribe(subscription._id)}>
                                        <BsTrash/>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>


const stateToPropertyMapper = (state) => ({
    subscriptions: state.admin.subscriptions
})

export default connect(stateToPropertyMapper, {unsubscribe})(EmailSubscriberComponent)
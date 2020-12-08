import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Rating from "react-rating";
import {connect} from "react-redux";
import {createUserFollowing, deleteUserFollowing} from "../../../actions/profileActions";

const FollowingComponent = ({
    user,
    UserFollowings,
    UserFollowers,
    createUserFollowing,
    deleteUserFollowing
                            }) =>{
    return (
        <div>
            <h2>
                People I follow
            </h2>
            <ListGroup variant="flush">
                {
                    UserFollowings.map(follow=>
                        <ListGroup.Item className="pl-0">
                            <Image width={40}
                                   height={32}
                                   src={follow.profilePicture === undefined ? "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/130-512.png" : follow.profilePicture}
                                   roundedCircle
                                   className="hideAtSm mr-2"
                            />
                            <Link to={`/users/${follow._id}/profile`}>{follow.username}</Link>
                            <span className="hideAtSm">
                            <Rating className="add-15-padding" initialRating={follow.rating} readonly
                                    emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                    fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                        </span>
                            <button className="pull-right btn btn-sm btn-outline-secondary" title="Unfollow" onClick={()=>deleteUserFollowing(user._id, follow._id)}>Unfollow</button>
                        </ListGroup.Item>)
                }
            </ListGroup>
            <br/>
            <h2>
                People who follow me
            </h2>
            <ListGroup variant="flush">
                {
                    UserFollowers.map(follow=>
                        <ListGroup.Item className="pl-0">
                            <Image width={40}
                                   height={32}
                                   src={follow.profilePicture === undefined ? "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/130-512.png" : follow.profilePicture}
                                   roundedCircle
                                   className="hideAtSm mr-2"
                            />
                            <Link to={`/users/${follow._id}/profile`}>{follow.username}</Link>
                            <span className="hideAtSm">
                            <Rating className="add-15-padding" initialRating={follow.rating} readonly
                                    emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                    fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                        </span>
                            {
                                UserFollowings.find(f=>f._id===follow._id) === undefined &&
                                <button className="pull-right btn btn-primary btn-sm" title="follow"
                                        onClick={()=>
                                            createUserFollowing(
                                                follow._id,
                                                user._id,
                                                follow)}
                                >Follow</button>
                            }
                            {
                                UserFollowings.find(f=>f._id===follow._id) !== undefined &&
                                <button className="pull-right btn btn-sm btn-outline-secondary" title="unfollow"
                                        onClick={()=>deleteUserFollowing(user._id, follow._id)}>Unfollow</button>

                            }
                        </ListGroup.Item>)
                }
            </ListGroup>
        </div>
    )
}


const stateToPropertyMapper = (state) => ({
    UserFollowers: state.profile.UserFollowers,
    UserFollowings: state.profile.UserFollowings,
    user: state.profile.user
})

export default connect(stateToPropertyMapper, {createUserFollowing, deleteUserFollowing})(FollowingComponent)

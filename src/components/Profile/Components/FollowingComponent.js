import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Rating from "react-rating";
import {connect} from "react-redux";
import {createFollow, deleteFollow} from "../../../actions/profileActions";

const FollowingComponent = ({
    user,
    follows,
    createFollow,
    deleteFollow
                            }) =>
    <div>
        <h2>
            People you follow
        </h2>
        <ListGroup variant="flush">
            {
                follows.filter(follow=>follow.followerId===user._id).map(follow=>
                    <ListGroup.Item className="pl-0">
                        <Image width={40}
                               height={32}
                               src={follow.followee.src}
                               roundedCircle
                               className="hideAtSm mr-2"
                        />
                        <Link to={`/users/${follow.followee._id}/profile`}>{follow.followee.username}</Link>
                        <span className="hideAtSm">
                            <Rating className="add-15-padding" initialRating={3} readonly
                                    emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                    fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                        </span>
                        <button className="pull-right btn btn-sm btn-outline-secondary" title="Unfollow" onClick={()=>deleteFollow(follow._id)}>Following</button>
                    </ListGroup.Item>)
            }

        </ListGroup>


        <br/>
        <h2>
            People who follow you
        </h2>
        <ListGroup variant="flush">
            {
                follows.filter(follow=>follow.followeeId===user._id).map(follow=>
                    <ListGroup.Item className="pl-0">
                        <Image width={40}
                               height={32}
                               src={follow.follower.src}
                               roundedCircle
                               className="hideAtSm mr-2"
                        />
                        <Link to={`/users/${follow.follower._id}/profile`}>{follow.follower.username}</Link>
                        <span className="hideAtSm">
                            <Rating className="add-15-padding" initialRating={3} readonly
                                    emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                    fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                        </span>
                        {
                            follows.find(f=>f.followeeId===follow.followerId && f.followerId===user._id) === undefined &&
                            <button className="pull-right btn btn-primary btn-sm" title="Unfollow"
                                    onClick={()=>createFollow({
                                        _id: "newf111",
                                        followerId: user._id,
                                        followeeId: follow.followerId,
                                        followee: {
                                            _id: follow.followerId,
                                            username: follow.follower.username,
                                        }
                                    })}
                            >Follow</button>
                        }
                    </ListGroup.Item>)
            }
        </ListGroup>
    </div>

const stateToPropertyMapper = (state) => ({
    follows: state.profile.follows,
    user: state.profile.user
})

export default connect(stateToPropertyMapper, {createFollow, deleteFollow})(FollowingComponent)

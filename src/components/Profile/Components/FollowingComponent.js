import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Rating from "react-rating";
import {RiErrorWarningLine} from "react-icons/ri";

const FollowingComponent = () =>
    <div>
        <h2>
            People you follow
        </h2>
        <ListGroup variant="flush">
            <ListGroup.Item className="pl-0">
                <Image width={40}
                       height={32}
                       src="https://banner2.cleanpng.com/20171215/92c/hedgehog-png-5a3484489a2ad5.0068272815133911766315.jpg"
                       roundedCircle
                       className="hideAtSm mr-2"
                />
                <Link to={`/users/Constanziato/profile`}>Constanziato</Link>
                <span className="hideAtSm">
                    <Rating className="add-15-padding" initialRating={3} readonly
                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                </span>
                <button className="pull-right btn btn-sm btn-outline-secondary" title="Unfollow">Following</button>
            </ListGroup.Item>
            <ListGroup.Item className="pl-0">
                <Image width={40}
                       height={32}
                       src="https://jpegwall.com/wp-content/uploads/2019/10/Harry-Potter-Wallpaper.jpg" roundedCircle
                       className="mr-2"
                />
                <span>Diaziato</span>
                <button className="pull-right btn btn-sm btn-outline-secondary" title="Unfollow">Following</button>
            </ListGroup.Item>
            <ListGroup.Item className="pl-0">
                <span>HarrisoForddy</span>
                <button className="pull-right btn btn-sm btn-outline-secondary" title="Unfollow">Following</button>
            </ListGroup.Item>
            <ListGroup.Item className="pl-0">
                <span>Bidenista</span>
                <button className="pull-right btn btn-sm btn-outline-secondary" title="Unfollow">Following</button>
            </ListGroup.Item>
        </ListGroup>


        <br/>
        <h2>
            People who follow you
        </h2>
            <ListGroup variant="flush">
                <ListGroup.Item className="pl-0">
                    <span>Constanziato</span>
                    <button className="pull-right btn btn-sm btn-primary" title="Follow">Follow</button>
                </ListGroup.Item>
                <ListGroup.Item className="pl-0">
                    <span>Diaziato</span>
                    <button className="pull-right btn btn-sm btn-outline-secondary" title="Unfollow">Following</button>
                </ListGroup.Item>
                <ListGroup.Item className="pl-0">
                    <span>HarrisoForddy</span>
                    <button className="pull-right btn btn-sm btn-primary" title="Follow">Follow</button>
                </ListGroup.Item>
                <ListGroup.Item className="pl-0">
                    <span>Bidenista</span>
                    <button className="pull-right btn btn-sm btn-primary" title="Follow">Follow</button>
                </ListGroup.Item>
            </ListGroup>

    </div>


export default FollowingComponent

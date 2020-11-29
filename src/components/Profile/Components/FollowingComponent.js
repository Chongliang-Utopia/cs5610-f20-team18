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
        <h4>
            People you follow
        </h4>
        <ListGroup variant="flush">
            <ListGroup.Item>
                <Image width={40}
                       height={32}
                       src="https://banner2.cleanpng.com/20171215/92c/hedgehog-png-5a3484489a2ad5.0068272815133911766315.jpg"
                       roundedCircle
                       className="hideAtSm"
                />
                <Link to={`/users/Constanziato/profile`} className="add-15-padding">Constanziato</Link>
                <span className="hideAtSm">
                    <Rating className="add-15-padding" initialRating={3} readonly
                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                </span>
                <Button size="sm" className="pull-right">Following</Button>
            </ListGroup.Item>
            <ListGroup.Item>
                <Image width={40}
                       height={32}
                       src="https://jpegwall.com/wp-content/uploads/2019/10/Harry-Potter-Wallpaper.jpg" roundedCircle
                />
                <span className="add-15-padding">Diaziato</span>
                <Button size="sm" className="pull-right">Following</Button>
            </ListGroup.Item>
            <ListGroup.Item>
                <span>HarrisoForddy</span>
                <Button size="sm" className="pull-right">Following</Button>
            </ListGroup.Item>
            <ListGroup.Item>
                <span>Bidenista</span>
                <Button size="sm" className="pull-right">Following</Button>
            </ListGroup.Item>
        </ListGroup>


        <br/>
        <h4>
            People who follow you
        </h4>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <span>Constanziato</span>
                    <Button size="sm" className="pull-right">Follow Back</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>Diaziato</span>
                    <Button size="sm" className="pull-right">Following</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>HarrisoForddy</span>
                    <Button size="sm" className="pull-right">Follow Back</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>Bidenista</span>
                    <Button size="sm" className="pull-right">Follow Back</Button>
                </ListGroup.Item>
            </ListGroup>

    </div>


export default FollowingComponent

import React from "react";
import classes from "./ImageCardForSearch.module.css";

const ImageCard = ({src}) =>
    <div className={classes.ImageCard}>
        <img src={src}/>
    </div>

export default ImageCard;

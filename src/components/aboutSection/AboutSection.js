import React from "react";
import classes from "./AboutSection.module.css"
import {Container} from "react-bootstrap";

const AboutSection = () =>
    <section className={classes.AboutSection} id={"about"}>
        <h1>ABOUT</h1>
        <div className="text-center my-5" style={{color: "#0e345a"}}>
            <h2>Sharing is Caring!</h2>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className={classes.aboutParagraph}>
                    <h4>
                        To encourage book-sharing culture and stronger connection between local book-lovers, we’re
                        inspired to facilitate book lovers to share books within the neighborhoods. We hope to help promote
                        everyone’s reading habits, as well as saving natural resources by recirculating books.
                    </h4>
                </div>
            </div>
            <div className="col-md-6">
                <div className={classes.imgDiv}>
                    <div className={classes.bookImg}>
                    </div>
                </div>
            </div>
        </div>

    </section>

export default AboutSection;
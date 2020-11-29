import React from "react";
import classes from "./HomePage.module.css"
import {Container} from 'react-bootstrap'
import BooksCarousel from '../UI/BooksCarousel'
import AboutSection from "../aboutSection/AboutSection"
import recommendedBooksLists from './../../assets/data/recommendedBooksLists.json'

const HomePage = () => (

    <Container fluid className={'px-5 ' + classes.HomePage}>
        <div className={"mb-5 " + classes.coverContainer}>
            <div className={classes.coverDiv}>
                A SOFA,<br/>A GOOD<br/>BOOK,<br/>AND YOU.
            </div>
        </div>

        <div className="pb-5" style={{background: "linear-gradient(180deg, #ffffff 140px, #0e345a 140px)"}}>
            <h1 className="text-center mb-5" style={{color: "#0e345a"}}>BESTSELLERS</h1>
            <BooksCarousel/>

            <div className={classes.recommendBook}>
                <hr/>
                <h5>This Month's</h5>
                <h1>RECOMMENDED BOOKS</h1>
                <hr/>
            </div>
            <BooksCarousel booksLists={recommendedBooksLists}/>
        </div>
        <AboutSection />
    </Container>

)

export default HomePage

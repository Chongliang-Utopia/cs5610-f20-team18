import React from "react";
import {connect} from "react-redux"
import classes from "./HomePage.module.css"
import {Container} from 'react-bootstrap'
import BooksCarousel from '../UI/BooksCarousel/BooksCarousel'
import AboutSection from "../aboutSection/AboutSection"
import recommendedBooksList from '../../assets/data/recommendedBooksList.json'
import bestsellerBooksList from '../../assets/data/bestsellerBooksList.json'
import UserActions from "../../actions/userActions"

class HomePage extends React.Component {

    componentDidMount() {
        if (this.props.isLoggedIn) {
            this.props.dispatch(UserActions.getFollowingsReadingList(this.props.userId))
        }
    }

    render() {
        const userRecommendedBooksList = this.props.followingsReadingList.map(bookId => ({
            id: bookId,
            thumbnail: `http://books.google.com/books/content?id=${bookId}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`
        }))
        return (
            <Container fluid className={'px-5 ' + classes.HomePage}>
                <div className={classes.coverContainer}>
                    <div className={classes.coverDiv}>
                        A SOFA,<br/>A GOOD<br/>BOOK,<br/>AND YOU.
                    </div>
                </div>

                <div className="pb-5" style={{background: "linear-gradient(180deg, #ffffff 200px, #0e345a 140px)"}}>
                    <h1 className="text-center mb-5" style={{color: "#0e345a"}}>MOST POPULAR</h1>
                    <BooksCarousel booksLists={bestsellerBooksList}/>

                    <div className={classes.recommendBook}>
                        <hr/>
                        <h5>This Month's</h5>
                        <h1>RECOMMENDED BOOKS</h1>
                        <hr/>
                    </div>
                    <BooksCarousel booksLists={[...userRecommendedBooksList, ...recommendedBooksList]}/>
                </div>
                <AboutSection/>
            </Container>
        )
    }
}

const StateToPropertyMapper = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    userId: state.auth.user?._id,
    followingsReadingList: state.profile.followingsReadingList,
})

export default connect(StateToPropertyMapper)(HomePage)

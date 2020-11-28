import React from "react";
import classes from "./HomePage.module.css"
import {Container} from 'react-bootstrap'
import BooksCarousel from '../UI/BooksCarousel'
import AboutSection from "../aboutSection/AboutSection"

const recommendedBooksLists = [
    [
        {
            id: "EDPXDwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=EDPXDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71ZIi-5XaDsLSusqArAjiYvB04eFUuDX_W0jyhxscgZ-ZpM47dFEk546ikAqAoIkU6lwJmKxNtqfZQ0l3WTbnZ_Tfh0PW7TR-SBy6iwxEvnYIwxHwbeQr5iG0Br3xMNx5sDu6Dp&source=gbs_api"
        },
        {
            id: "DEoEEAAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=DEoEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70QsMVc0TluWVCDm-6Kr6D7IItZaOkAUuVrB-ips8OsqGP3Xi2yekWfVVqqq_7kTZ2i0q7ylOiYd8bufMGGsEFtIXOQXCqOxZA4QOyjqyXtSSZepcx7NWI0cbsZxzeTDnvDSlBb&source=gbs_api"
        },
        {
            id: "tbR6DwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=tbR6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72M5OdPO3hhaqtWOXEajh3mq7WaCuJgSj0YT2LxqfAntDEjPhHs2QdvB9OHPfxzpcoOUEz-c0nz7MMmxWtrBPeQZaIYQE924qa2YNZU6W5Iy0y3xPkOdEfG8Hlrh4HMDEdbrBi9&source=gbs_api"
        },
        {
            id: "6Zx7DwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=6Zx7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71Wb-73iczIhotcFo27yQixrVZyDZQmaZeA7bR8Bsrrg0gvpoclVCxPw97FkLNCBqn6kfWPfjglz4OvD6QiCV6JLkQWdAQ2jze3CaHsuvcHnMC_MMucE-gCacnu0ht4ccjXI9R8&source=gbs_api"
        },
        {
            id: "SUmHDwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=SUmHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE721nnfHY1L7rQAuh-hYfE8sWnM1O9CebtwOMOuzf4Vtf4RQEtFbgZTg_sus-ZlDaygFKkI_y77l1CS4gbsEAh9oV5jxNERrwyICCQnTmxqSemuOJ1qIz047psq7dMgAWlQ_d65U&source=gbs_api"
        },
        {
            id: "B-5GDwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=B-5GDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70eTQntaeeAmr9Tn__efV7LuJY08L1MO9eNASJ2eFCess3XyxVTkKJjiGvDK2xXelwgDE0z7Jum1SSVnqTgbCEEWlCAfc0ZOg7qgnsS3L3nSin4AGybow9jc3Mepw9_agtKclTT&source=gbs_api"
        },
    ],
    [
        {
            id: "dGInDwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=dGInDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70j5s8TuxFCgw4tMAb1hV595Pa2o5AIFtVP6sAjmVPN8ReZQIyTZCgtt9Tty3uVnpQDz6yWzwwHR1xNlhvoz_86ANpnFt6U_DX-iSkUAbfZ0r03AwjqXxL1UD_Pw7kJFKulOjEM&source=gbs_api"
        },
        {
            id: "-7SPDwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=-7SPDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70-z3YCnljVoXOeU8Ql1HiIXLLvm1UxJE0QgTXqDJSx-RxiRT_ShssBDkO3phRtym_5IEXbOGgiVPCad649CAfDzI1lrC1LEmVAN7EzZrscCfCw3ayKtoYS_FhT2vobMPFvvkAg&source=gbs_api"
        },
        {
            id: "b36OZcfMqJMC",
            thumbnail: "http://books.google.com/books/content?id=b36OZcfMqJMC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71TC7DGcW1ZaPH2Rr8qLk2FeMR9m-z7DhS4vDMU_dU5i9r-wPizLUSzRcE4a_kt_CEKLYv7jeRLvFN6_JI1dTGlQt23uaADRhfEcdn_FOCN52tIJxi276H6ViPhhiVS5PG4rr52&source=gbs_api"
        },
        {
            id: "gpqEDwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=gpqEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73BppDsE7C-ju3GMUn9K4eWd-pYOsZcYkA6nl7SVyEtkKqP7cEl8ED2Ur0h5Nyvs0gd98-41X8nBjogeGiiDOagyGxCHC6fAknNHvoovLq62ZGCWQ_kIcYtGpnt10XEbcP55jCK&source=gbs_api"
        },
        {
            id: "lKuEDwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=lKuEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72B-h1iaufEJieTKBBFrmz5BIyjQFMq3-alT95EGMFRbrqyA9U7I44dfDqT009Kq3G7dymRaCFsW_c7e0Ilh-1oQwXpeqSUjiQjJ7PDVkEGsIcwJ0RawVbiTzmDVcJashEAU-Dk&source=gbs_api"
        },
        {
            id: "ldGQDwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=ldGQDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70b_iFUYdEXAsdRNNzrjJ9iGIWBsZzP3PhmM0HfzlEp7wr0CN6SgqCyB-I805c3YRr9qPh60ZfdFwxkHWjcWapcvNpwRxaDrog4tav5UrSrKlHmHWg5SHadKCo11ppKzBnakpE-&source=gbs_api"
        },
    ],
]

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

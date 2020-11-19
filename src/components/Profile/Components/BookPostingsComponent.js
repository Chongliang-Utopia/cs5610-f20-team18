import React, {Fragment} from "react";
import ImageCard from "../../UI/imageCard/ImageCard";
import { RiEdit2Line } from "react-icons/ri";
import { MdDeleteSweep} from "react-icons/md"
import Modal from "../../UI/modal/Modal";
import DeletePosting from "./DeletePosting";
import EditPosting from "./EditPosting";


class BookPostingsComponent extends React.Component{
    state = {
        deleting: false,
        editing: false,
        currentBook: {}

    }

    deletePosting = (book) => {
        this.setState({
            deleting: true,
            currentBook: book
        })
    }

    editPosting = (book) => {
        this.setState({
            editing: true,
            currentBook: book
        })
    }
    cancelDelete = () => {
        this.setState({
            deleting: false,
            currentBook: {}
        })
    }

    cancelEdit = () => {
        this.setState({
            editing: false,
            currentBook: {}
        })
    }

    render() {
        return (
        <div>
            <h2>
                Your Postings
            </h2>
            <Modal show={this.state.deleting} modalClosed={this.cancelDelete}>
                <DeletePosting book={this.state.currentBook}/>
            </Modal>
            <Modal show={this.state.editing} modalClosed={this.cancelEdit}>
                <EditPosting book={this.state.currentBook}/>
            </Modal>
            {
                this.props.bookPostings.map(book =>
                    <div className="ImageCard">
                        <ImageCard src={book.src}/>
                        <div className="center-text">
                            <RiEdit2Line size={"1.5em"} onClick={()=>this.editPosting(book)}/>
                            <MdDeleteSweep size={"1.5em"} onClick={()=>this.deletePosting(book)}/>
                        </div>
                    </div>
                )
            }
        </div>
        )
    }

    }

export default BookPostingsComponent

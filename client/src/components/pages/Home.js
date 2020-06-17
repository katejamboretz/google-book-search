import React, { Component } from "react";
// import NavTabs from "../NavTabs";
import Jumbotron from "../Jumbotron";
//import Nav from "../Nav";
import Input from "../Input";
import Button from "../Button";
import API from "./utils/API";
import { BookList, BookListItem } from "../BookList";
import { Container, Row, Col } from "../Grid";


class Home extends Component {
    state = {
        books: [],
        bookSearch: ""
    };

    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // console.log("search term: ", this.state.bookSearch);
        API.getBooks(this.state.bookSearch)
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };

    handleBookSubmit = (title, authors, description, image, link) => {
        API.saveBook({
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link
        })
            .then(res => console.log("save requested"))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <Container>
                    <Row>
                        <Col size="xs-12">
                            <h1 className="text-center">Search for Books</h1>
                            <br></br>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                            <Input
                                                name="bookSearch"
                                                value={this.state.bookSearch}
                                                onChange={this.handleInputChange}
                                                placeholder="Search For a Book"
                                            />
                                        </Col>
                                        <Col size="xs-3 sm-2">
                                            <Button
                                                onClick={this.handleFormSubmit}
                                                type="success"
                                                className="input-lg"
                                            >
                                                Search
                                        </Button>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <br></br>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-12">
                            {!this.state.books.length ? (
                                <h2 className="text-center">No Books to Display</h2>
                            ) : (
                                    <BookList>
                                        {this.state.books.map(book => {
                                            return (
                                                <>
                                                    <BookListItem
                                                        key={book.volumeInfo.title}
                                                        title={book.volumeInfo.title}
                                                        authors={book.volumeInfo.authors}
                                                        description={book.volumeInfo.description}
                                                        image={book.volumeInfo.imageLinks.thumbnail}
                                                        link={book.volumeInfo.previewLink}
                                                    />
                                                    <Button
                                                        onClick={() => this.handleBookSubmit(book.volumeInfo.title, book.volumeInfo.authors, book.volumeInfo.description, book.volumeInfo.imageLinks.thumbnail, book.volumeInfo.previewLink)}
                                                    >Save Book</Button>
                                                    <br></br>
                                                    <br></br>
                                                </>
                                            );
                                        })}
                                    </BookList>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>


        );
    }
}

export default Home;

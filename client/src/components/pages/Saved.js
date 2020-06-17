import React, { Component } from "react";
// import NavTabs from "../NavTabs";
import Jumbotron from "../Jumbotron";
//import Nav from "../Nav";
// import Input from "../Input";
import Button from "../Button";
// import API from "./utils/API";
import { BookList, BookListItem } from "../BookList";
import { Container, Row, Col } from "../Grid";
import API from "./utils/API";


class Saved extends Component {
    state = {
        books: [],
        bookSearch: ""
    };

    loadBooks = () => {
        API.getSaved()
            .then(res =>
                this.setState({ books: res.data }))
            .catch(err => console.log(err));
    }

    handleBookDelete = (id) => {
        API.deleteSaved(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadBooks();
    }

    // handleInputChange = event => {

    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     // console.log("search term: ", this.state.bookSearch);
    //     API.getBooks(this.state.bookSearch)
    //         .then(res => this.setState({ books: res.data }))
    //         .catch(err => console.log(err));
    // };

    // document on load function, to get saved books from database

    // delete function

    render() {
        return (
            <div>
                <Jumbotron />
                <Container>
                    <Row>
                        <Col size="xs-12">
                            <h1 className="text-center">Saved Books</h1>
                            <br></br>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    {/* <Row>
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
                                </Container>
                            </form>
                        </Col>
                    </Row> */}

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
                                                        key={book._id}
                                                        title={book.title}
                                                        authors={book.authors}
                                                        description={book.description}
                                                        image={book.image}
                                                        link={book.link}
                                                    />
                                                    <Button
                                                        onClick={() => this.handleBookDelete(book._id)}
                                                    >Delete Book</Button>
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

export default Saved;

import React from "react";
import Thumbnail from "../Thumbnail";
// import Button from "../Button"
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  image = "https://placehold.it/300x300",
  title,
  authors,
  description,
  link
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Authors: {authors}</p>
            <p>Description: {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Go to book!
            </a>
            {/* <br></br>
            <br></br>
            <p>
              <Button>Save Book</Button>
            </p> */}
          </Col>
        </Row>
      </Container>
    </li>
  );
}

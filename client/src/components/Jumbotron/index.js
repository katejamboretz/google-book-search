import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1 className="text-white">Book Search</h1>
      <h2><a target="_blank" rel="noopener noreferrer" className="text-danger" href="https://developers.google.com/books">
        Powered by Google Books API
      </a></h2>
    </div>
  );
}

export default Jumbotron;

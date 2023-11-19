import { useState } from "react";
import PropTypes from "prop-types";
import $ from "jquery";

const Article = ({ quotesArr }) => {
  // Generate an initial quote
  const [index, setIndex] = useState(
    Math.round(Math.random() * quotesArr.length)
  );

  // Handle the background color changes using JQuery
  const COLORS = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const color = Math.floor(Math.random() * COLORS.length);
  $("body").css("background-color", COLORS[color]);

  // Generate a new quote index through the state
  const handleClick = () => {
    setIndex(Math.round(Math.random() * quotesArr.length));
  };

  // Check if JSON object has loaded already
  let quote = "Loading...";
  let author = "Loading...";
  if (quotesArr[index] !== undefined) {
    quote = quotesArr[index].quote;
    author = quotesArr[index].author;
  }

  return (
    <article id="quote-box" className="shadow-lg rounded bg-light">
      <h1>Quote</h1>
      <div className="border border-1 container-fluid"></div>
      <article
        style={{ border: "none" }}
        id="container"
        className="bg-body-secondary container-fluid"
      >
        <figure>
          <blockquote className="blockquote">
            <h2 id="text">
              <i className="bi bi-quote"></i>
              {quote}
            </h2>
          </blockquote>
          <figcaption className="blockquote-footer" id="author">
            {author}
          </figcaption>
        </figure>
      </article>
      <div className="border border-1 container-fluid"></div>
      <div className="button-row col">
        {/* <button
          className="text-center btn btn-dark btn-lg shadow rounded"
          id="new-quote"
          onClick={jquery}
        >
          Prev quote
        </button> */}
        <button className="text-center btn btn-lg btn-outline-secondary">
          <a
            target="_blank"
            rel="noreferrer"
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
              encodeURIComponent('"' + quote + '" ' + author)
            }
            className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
          >
            Tweet
          </a>
        </button>
        <button
          className="text-center btn btn-dark btn-lg shadow rounded"
          id="new-quote"
          onClick={handleClick}
        >
          Next quote
        </button>
      </div>
      <footer>
        <p>
         &copy; Created by:
          <a
            target="_blank"
            rel="noreferrer"
            className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href="https://github.com/mr-n30"
          >
            mr-n30
          </a>
        </p>
      </footer>
    </article>
  );
};

// Set propTypes and defaultProps
Article.propTypes = { quotesArr: PropTypes.array.isRequired };
Article.defaultProps = {
  quotesArr: [],
};

export default Article;

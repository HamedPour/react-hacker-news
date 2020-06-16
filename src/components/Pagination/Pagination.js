import React from "react";

const Pagination = (props) => {
  const totalStories = props.totalStories;
  const storiesPerPage = props.storiesPerPage;

  const pageNumber = [];

  for (let i = 1; i < Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumber.push(i);
  }

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // Figure out how to only show storiesPerPage in stories and on the screen

  return (
    <nav>
      <ul>
        {pageNumber.map((number) => {
          return (
            <li key={number}>
              <button>{number}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;

import React from "react";
import PaginationNav from "./styledComponents/PaginationNav";

const Pagination = (props) => {
  const totalStories = props.totalStories;
  const storiesPerPage = props.storiesPerPage;
  const pageNumber = [];

  // determine how many pagination buttons to show based on total
  // number of stories send through props.
  for (let i = 1; i < Math.ceil(totalStories / storiesPerPage) + 1; i++) {
    pageNumber.push(i);
  }

  // Send current page up to parent in order to change which
  // page is being shown.
  function updateCurrentPage(number) {
    props.updatePage(number);
  }

  return (
    <PaginationNav>
      <ul>
        {pageNumber.map((number) => {
          return (
            <li key={number}>
              <button onClick={() => updateCurrentPage(number)}>
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </PaginationNav>
  );
};

export default Pagination;

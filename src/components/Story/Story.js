import React from "react";
import ArticleContainer from "./styledComponents/ArticleContainer";
import Article from "./styledComponents/Article";
import ArticleTitle from "./styledComponents/ArticleTitle";
import ArticleMeta from "./styledComponents/ArticleMeta";

const Story = () => {
  return (
    <ArticleContainer>
      <Article>
        <ArticleTitle>
          <a>Stephen Hawking has died</a>
          <a>(http://www.bbc.come/news/sdjfhe3423)</a>
        </ArticleTitle>
        <ArticleMeta>
          <span>
            {" "}
            <a> 6348 points</a>
          </span>
          <b> | </b>
          <span>
            {" "}
            <a>Congio</a>{" "}
          </span>
          <b> | </b>
          <span>
            {" "}
            <a>2 years ago</a>{" "}
          </span>
          <b> | </b>
          <span>
            {" "}
            <a>436 comments</a>{" "}
          </span>
          <b> | </b>
        </ArticleMeta>
      </Article>
    </ArticleContainer>
  );
};

export default Story;

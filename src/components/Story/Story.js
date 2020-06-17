import React, { useState, useEffect } from "react";
import ArticleContainer from "./styledComponents/ArticleContainer";
import Article from "./styledComponents/Article";
import ArticleTitle from "./styledComponents/ArticleTitle";
import ArticleMeta from "./styledComponents/ArticleMeta";

const Story = (props) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    setStory(props.story);
  }, [props]);

  if (props.loading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <ArticleContainer>
      <Article>
        <ArticleTitle searchedValue={props.searchedValue}>
          <a href={story.commentSectionURL}>{story.mainTitle}</a>
          <a target="_blank" rel="noopener noreferrer" href={story.articleURL}>
            ({story.articleURL})
          </a>
        </ArticleTitle>
        <ArticleMeta>
          <span>
            {" "}
            <a href={story.commentSectionURL}> {story.points} points</a>
          </span>
          <b> | </b>
          <span>
            {" "}
            <a href={story.authorURL}>{story.author}</a>{" "}
          </span>
          <b> | </b>
          <span>
            {" "}
            <a href={story.commentSectionURL}>{story.date}</a>{" "}
          </span>
          <b> | </b>
          <span>
            {" "}
            <a href={story.commentSectionURL}>
              {story.commentCounts} comments
            </a>{" "}
          </span>
        </ArticleMeta>
      </Article>
    </ArticleContainer>
  );
};

export default Story;

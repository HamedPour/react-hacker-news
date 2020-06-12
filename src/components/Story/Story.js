import React, { useState, useEffect } from "react";
import ArticleContainer from "./styledComponents/ArticleContainer";
import Article from "./styledComponents/Article";
import ArticleTitle from "./styledComponents/ArticleTitle";
import ArticleMeta from "./styledComponents/ArticleMeta";

const Story = (props) => {
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    setMetaData(props.metaData);
  }, [props]);

  return (
    <ArticleContainer>
      <Article>
        <ArticleTitle>
          <a>{metaData.storyTitle}</a>
          <a>({metaData.storyURL})</a>
        </ArticleTitle>
        <ArticleMeta>
          <span>
            {" "}
            <a> {metaData.storyPoints} points</a>
          </span>
          <b> | </b>
          <span>
            {" "}
            <a>{metaData.storyAuthor}</a>{" "}
          </span>
          <b> | </b>
          <span>
            {" "}
            <a>{metaData.storyDate}</a>{" "}
          </span>
          <b> | </b>
          <span>
            {" "}
            <a href={metaData.storyCommentSection}>
              {metaData.storyCommentsCount} comments
            </a>{" "}
          </span>
          <b> | </b>
        </ArticleMeta>
      </Article>
    </ArticleContainer>
  );
};

export default Story;

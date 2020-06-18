import React, { useState, useEffect } from "react";
import ArticleContainer from "./styledComponents/ArticleContainer";
import Article from "./styledComponents/Article";
import ArticleTitle from "./styledComponents/ArticleTitle";
import ArticleMeta from "./styledComponents/ArticleMeta";
import topStoriesServices from "../../services/topStoriesServices";

const Story = (props) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    topStoriesServices
      .fetchStory(props.storyID)
      .then((blub) => blub.data && setStory(blub.data));
  }, [props]);

  if (props.loading) {
    return <h2>Loading ...</h2>;
  }

  function findDate(theTime) {
    // USE TIMESTAMP and INTERVALS here
    console.log(new Date(theTime));
    return;
  }

  return (
    <ArticleContainer>
      <Article>
        <ArticleTitle searchedValue={props.searchedValue}>
          <a href={story.url}>{story.title}</a>
          <a target="_blank" rel="noopener noreferrer" href={story.url}>
            ({story.url})
          </a>
        </ArticleTitle>
        <ArticleMeta>
          <span>
            {" "}
            <a href={story.url}> {story.score} points</a>
          </span>
          <b> | </b>
          <span>
            {" "}
            <a href={story.url}>{story.by}</a>{" "}
          </span>
          <b> | </b>
          <span>
            {" "}
            <a href={story.url}>{findDate(story.time)}</a>{" "}
          </span>
          <b> | </b>
          <span>
            {" "}
            <a href={story.url}>{} comments</a>{" "}
          </span>
        </ArticleMeta>
      </Article>
    </ArticleContainer>
  );
};

export default Story;

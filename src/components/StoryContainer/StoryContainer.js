import React, { useState, useEffect } from "react";
import Story from "../Story/Story";
import topStoriesServices from "../../services/topStoriesServices";

const StoryContainer = (props) => {
  const [loadingStories, setLoadingStories] = useState(false);
  const [storyIDs, setStoryIDs] = useState([]);

  useEffect(() => {
    function fetchStoryIds() {
      setLoadingStories(true);
      topStoriesServices.fetchTopStoriesIds().then((storyID) => {
        setStoryIDs(storyID);
        props.TotalStories(storyID.length);
      });
      setLoadingStories(false);
    }
    fetchStoryIds();
  }, [props]);

  function renderStories() {
    return storyIDs.map((storyID, index) => {
      return <Story key={index} loading={loadingStories} storyID={storyID} />;
    });
  }

  return (
    <>
      <div>{renderStories()}</div>
    </>
  );
};

export default StoryContainer;

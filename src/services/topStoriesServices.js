import Api from "./Api";

export default {
  async fetchTopStoriesIds() {
    /*
     * get first 20 top story IDs
     */
    return await Api()
      .get("topstories.json")
      .then((blub) => {
        return blub.data.slice(0, 10);
      })
      .catch((err) => {
        console.log("ERROR in topStoriesServices.js", err.message);
      });
  },

  async fetchStory(storyID) {
    return await Api()
      .get(`item/${storyID}.json`)
      .then((data) => data)
      .catch((err) => {
        console.log("Error in topStoriesServices");
      });
  },
};

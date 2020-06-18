import Api from "./Api";

export default {
  async fetchTopStoriesIds() {
    /*
     * get first 20 top story IDs
     */
    return await Api()
      .get("beststories.json")
      .then((blub) => {
        return blub.data.slice(0, 2);
      })
      .catch((err) => {
        console.log("ERROR in topStoriesServices.js - Axios has gone rogue!");
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

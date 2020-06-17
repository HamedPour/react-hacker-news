import Api from "./Api";

export default {
  async topStoriesIds() {
    /*
     * get first 50 top story IDs
     */
    return await Api()
      .get("topstories.json")
      .then((res) => {
        return res.data.slice(0, 20);
      })
      .catch((err) => {
        console.log("ERROR in topStories.js - Axios is gone rogue!");
      });
  },
};

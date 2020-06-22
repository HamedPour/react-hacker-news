const topstories = [9999923, 9999421, 9999235, 9299923, 1999324, 3929125];

const stories = [
  {
    by: "dhouston",
    descendants: 23,
    id: 9999923,
    kids: [
      8952,
      8881,
      8872,
      8873,
      8955,
      10403,
      8903,
      8928,
      9125,
      8998,
      8901,
      8902,
      8907,
      8894,
      8878,
      8870,
      8980,
      8934,
      8876,
    ],
    score: 111,
    time: 1275714200,
    title: "My YC app: Dropbox - Throw away your USB drive",
    type: "story",
    url: "http://www.getdropbox.com/u/2/screencast.html",
  },
  {
    by: "TimmyBroks",
    descendants: 33,
    id: 9999421,
    kids: [
      8952,
      8928,
      9125,
      8998,
      8901,
      8902,
      8907,
      8894,
      8878,
      8870,
      8980,
      8934,
      8876,
    ],
    score: 211,
    time: 110714200,
    title: "Why the world doesn't need Pizza",
    type: "story",
    url: "http://www.getdropbox.com/u/2/screencast.html",
  },
  {
    by: "James Cook",
    descendants: 80,
    id: 9999235,
    score: 811,
    time: 1714200,
    title: "The Price of Freedome",
    type: "story",
    url: "http://www.getdropbox.com/u/2/screencast.html",
  },
  {
    by: "Edward Peal",
    descendants: 45,
    id: 9299923,
    kids: [8876],
    score: 11,
    time: 15714200,
    title: "Why so serious Batman!",
    type: "story",
    url: "http://www.getdropbox.com/u/2/screencast.html",
  },
  {
    by: "Beth Maths",
    descendants: 7,
    id: 1999324,
    kids: [8952, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876],
    score: 4111,
    time: 175714200,
    title: "Math is the best thing in the world",
    type: "story",
    url: "http://www.getdropbox.com/u/2/screencast.html",
  },
  {
    by: "Bojo",
    descendants: 0,
    id: 3929125,
    score: 11,
    time: 1275714200,
    title: "How to be the worst of the worst after Trump",
    type: "story",
    url: "http://www.getdropbox.com/u/2/screencast.html",
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  topstories,
  stories,
};
const data = [
  {
    id: 1,
    name: "aa"
  },
  {
    id: 2,
    name: "bb"
  },
  {
    id: 3,
    name: "cc"
  },
  {
    id: 4,
    name: "dd"
  },
  {
    id: 5,
    name: "ee"
  },
  {
    id: 7,
    name: "ff"
  },
  {
    id: 6,
    name: "gg"
  },
  {
    id: 4,
    name: "hh"
  }
];

const basicResponse = {
  "0": "GET    /",
  "1": "GET    /jumplings",
  "2": "POST   /jumplings",
  "3": "GET /jumplings/:id",
  "4": "PUT /jumplings/:id",
  "5": "DELETE /jumplings/:id",
  "6": "-----------------------",
  "7": "POST   /jumplings/presenters",
  "8": "GET    /jumplings/presenters"
};

module.exports = { data, basicResponse };

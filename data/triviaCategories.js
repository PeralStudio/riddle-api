const riddles = require("../data/riddle");

const categories = [...new Set(riddles.map((riddle) => riddle.category))];

module.exports = {
    "Available Trivia Categories": categories.length,
    categories
};

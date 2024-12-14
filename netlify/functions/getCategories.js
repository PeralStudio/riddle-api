const triviaCategories = require("../../data/triviaCategories");

exports.handler = async () => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(triviaCategories)
    };
};
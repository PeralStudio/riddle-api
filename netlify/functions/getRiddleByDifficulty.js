const riddles = require("../../data/riddle");

exports.handler = async (event) => {
    const { difficulty } = event.queryStringParameters || {};

    if (!difficulty) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Category parameter is required" })
        };
    }

    // Filtrar las preguntas por categoría
    const filteredRiddle = riddles.filter(
        (r) => r.difficulty.toLowerCase() === difficulty.toLowerCase()
    );

    if (filteredRiddle.length === 0) {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: "No questions found for this category" })
        };
    }

    //get one random riddle from the filtered array
    const randomIndex = Math.floor(Math.random() * filteredRiddle.length);
    const randomRiddle = filteredRiddle[randomIndex];

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(randomRiddle)
    };
};

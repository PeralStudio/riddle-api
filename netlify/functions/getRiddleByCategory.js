const riddles = require("../../data/riddle");

exports.handler = async (event) => {
    const { category } = event.queryStringParameters || {};

    if (!category) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Category parameter is required" })
        };
    }

    // Filtrar las preguntas por categoría
    const filteredRiddle = riddles.filter(
        (r) => r.category.toLowerCase() === category.toLowerCase()
    );

    if (filteredRiddle.length === 0) {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: "No questions found for this category" })
        };
    }

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filteredRiddle)
    };
};

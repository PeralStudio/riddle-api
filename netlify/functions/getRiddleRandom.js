const riddles = require("../../data/riddle");

exports.handler = async (event) => {
    try {
        // Verificar que haya preguntas disponibles
        if (riddles.length === 0) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: "No trivia questions available" })
            };
        }

        // Obtener un índice aleatorio
        const randomIndex = Math.floor(Math.random() * riddles.length);

        // Obtener la pregunta aleatoria
        const randomRiddle = riddles[randomIndex];

        // Devolver la pregunta aleatoria
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(randomRiddle)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "An error occurred while fetching a random trivia question"
            })
        };
    }
};

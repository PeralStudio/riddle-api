exports.handler = async (event) => {
    // Verifica si la ruta es la raíz
    if (event.path === "/health") {
        return {
            statusCode: 200,
            body: JSON.stringify({ status: "healthy" })
        };
    }

    // Manejo de otras rutas se puede agregar aquí en el futuro
    return {
        statusCode: 404,
        body: JSON.stringify({ error: "Not Found" })
    };
};

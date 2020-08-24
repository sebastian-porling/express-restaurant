const errorHandler = require("express-error-handler");

/**
 * Registers a static page for 404
 */
const handler = errorHandler({
    static: {
        "404": "./public/error/404.html",
    },
});

module.exports = { errorHandler, handler };

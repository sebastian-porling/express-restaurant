const welcomeMessage = require("./modules/welcomeMessage.js");
const server = require("./modules/server.js");

/**
 * Shows welcome message and starts server with logger
 * @param port Port to start server on, 3000 default
 */
module.exports.main = (port = 3000) => {
    try {
        welcomeMessage.display();
        server.start(port);
    } catch (error) {
        console.error("Couldn't start server, ", error);
    }
};

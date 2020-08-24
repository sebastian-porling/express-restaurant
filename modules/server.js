const express = require("express");
const { errorHandler, handler } = require("./errorHandler.js");
const { logger } = require("./logger.js");
const restaurants = require("../data/restaurants.json");
const app = express();

/* register logger */
app.use(logger);

/* register static components */
app.use(express.static("public", { extensions: ["html"] }));
app.use("/restaurant/image", express.static("./images"));

/**
 * Fetches data from the json file
 */
app.get("/data", (req, res) => {
    res.status(200).json(restaurants);
});

/* Has to be last to catch the ones that are not registered */
app.use(errorHandler.httpError(404));
app.use(handler);

/**
 * Starts the server at the given port
 * @param port 
 */
module.exports.start = (port) => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
};

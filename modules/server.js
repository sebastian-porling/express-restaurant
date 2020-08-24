const express = require("express");
const { errorHandler, handler } = require("./errorHandler.js");
const { logger } = require("./logger.js");
const restaurants = require("../data/restaurants.json");
const app = express();
const path = require('path');

/* register logger */
app.use(logger);

/* register static components */
console.log(path.join(__dirname, "../public"))
app.use(express.static(path.join(__dirname, "../public"), { extensions: ["html"] }));
app.use("/restaurant/image", express.static(path.join(__dirname, "../images")));

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

const figlet = require("figlet");

/**
 * Displays a welcome message
 */
module.exports.display = () => {
    try {
        console.log(figlet.textSync("express"));
        console.log(figlet.textSync("restaurants"));
    } catch (error) {
        console.log("🍽🥣 express-restaurants! 🥡🥢");
    }
};

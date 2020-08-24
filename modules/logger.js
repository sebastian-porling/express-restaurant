const morgan = require("morgan");
const chalk = require("chalk");

/**
 * Logs the HTTP request into standard out with styling!
 */
module.exports.logger = morgan((tokens, req, res) => {
    const status = tokens.status(req, res);
    return [
        chalk.green.bold(tokens.method(req, res)),
        getStatusEmoji(status),
        chalk.red.bold(status),
        chalk.white(tokens.url(req, res)),
        chalk.yellow(tokens["response-time"](req, res) + " ms"),
    ].join(" ");
});

/**
 * Generates an emoji to fit the status code
 * @param code status code
 *  @returns emoji
 */
const getStatusEmoji = (code) => {
    return code >= 500
        ? "⚠️"
        : code >= 400
        ? "❌"
        : code >= 300
        ? "🟡"
        : code >= 200
        ? "✔️ "
        : "🟦";
};

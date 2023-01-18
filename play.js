const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

const conn = connect();

setupInput(conn);
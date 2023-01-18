const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.2.40",// IP address here,
    port: 50541 // PORT number here,
  });

  
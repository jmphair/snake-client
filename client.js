const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.2.40",// IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    // from the article I think it's this one... ran with console.log a few too many times lol
    conn.write('Name: JP'); // working! the servers says: "JP: Hey"
  });

  return conn;
};

module.exports = connect;   
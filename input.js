
const { connect } = require("./client");


const handleUserInput = function (key) {

  if (key === '\u0003') {
    process.exit();
  };

  if (key === 'w') {
    connection.write('Move: up');
  };

  if (key === 's') {
    connection.write('Move: down');
  };

  if (key === 'a') {
    connection.write('Move: left');
  };

  if (key === 'd') {
    connection.write('Move: right');
  };

  if (key === 'g') {
    connection.write('Say: Yeah Boi!');
  };

  if (key === 'h') {
    connection.write('Say: Uh oh!');
  };

  if (key === 't') {
    connection.write('Say: OMG!');
  }

  if (key === 'y') {
    connection.write('Say: Booooooo....');
  }

};

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};


module.exports = {
  setupInput
};
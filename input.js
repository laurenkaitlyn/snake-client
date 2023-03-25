const { stdin } = require('process');
//stores the active TCP connection object
let connection;

//lets user exit program with crtl+c
const handleUserInput = function(key) {
  // exit if user presses ctrl + c
  if (key === '\u0003') {
    process.exit();
  }
};

//take in user input and relays that to server
const setInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  //tells server what keys are associated with movement or messages
  stdin.on('data', (key) => {
    //move up
    if (key === 'w') {
      conn.write("Move: up");
    }
    //move right
    if (key === 'd') {
      conn.write("Move: right");
    }
    //move down
    if (key === 's') {
      conn.write("Move: down");
    }
    //move left
    if (key === 'a') {
      conn.write("Move: left");
    }
    //say #1
    if (key === 'v') {
      conn.write("Say: sup");
    }
    //say #2
    if (key === 'f') {
      conn.write("Say: chonky snek");
    }
  });

  return stdin;
};

module.exports = { setInput };
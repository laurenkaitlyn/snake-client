const { stdin } = require('process');
//stores the active TCP connection object
let connection;

//set up interface to handle user input from stdin
const handleUserInput = function () {
  stdin.on('data', (key) => {
    // exit if user presses ctrl + c
    if (key === '\u0003') {
      process.exit();
    }
  })

}

const setInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

    //move up
  stdin.on('data', (key) => {
    if (key === 'w') {
      conn.write("Move: up");
    }
  });

  //move right
  stdin.on('data', (key) => {
    if (key === 'd') {
      conn.write("Move: right");
    }
  });

  //move down
  stdin.on('data', (key) => {
    if (key === 's') {
      conn.write("Move: down");
    }
  });

  //move left
  stdin.on('data', (key) => {
    if (key === 'a') {
      conn.write("Move: left");
    }
  });


  return stdin;
};

module.exports = { setInput };
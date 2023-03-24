const { stdin } = require('process');
//set up interface to handle user input from stdin
const handleUserInput = function () {
  stdin.on('data', (key) => {
    // exit if user presses ctrl + c
    if (key === '\u0003') {
      process.exit();
    }
  })

}

const setInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setInput };
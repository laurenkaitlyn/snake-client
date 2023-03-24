const net = require("net");
// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");


  conn.on('data', (info) => {
    console.log(info)
  })
};

module.exports = connect;
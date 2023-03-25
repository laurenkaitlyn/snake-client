const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  //confirms wth the client they are connected and associates a 3 character idenitfier to their snake
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: LKG");
  });

  //takes in and logs idle/death messages from server
  conn.on('data', (info) => {
    console.log(info);
  });

  return conn;
};

module.exports = { connect };
const { connect } = require('./client');
const { setInput } = require('./input');

console.log("Connecting ...");
setInput(connect());

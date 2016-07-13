var spawn = require('child_process').spawn;
var duplexer = require("duplexer2");

module.exports = function(cmd,args){
  var r = spawn(cmd, args);
  return duplexer(r.stdin, r.stdout);
};

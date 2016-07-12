var through = require("through2");
var http = require("http");
var port = process.argv[2];


function write(buffer,_, next){
  this.push(buffer.toString().toUpperCase());
  next();
}
function end (done) {done();}

http.createServer(function(req,res){
  if (req.method === "POST"){
    req.pipe(through(write, end)).pipe(res);
  }
}).listen(port);

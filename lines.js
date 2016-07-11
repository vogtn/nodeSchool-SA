var through = require("through2");
var split = require("split");
var tr = through(write);
var lineCount = 0;

  function write(buffer,_,next){
    var line = buffer.toString();
    this.push(lineCount % 2 === 0
    ? line.toLowerCase() + '\n'
    : line.toUpperCase() + '\n'
);
lineCount++;
    next();
  }
  function end (done){
    done();
  }
  process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);

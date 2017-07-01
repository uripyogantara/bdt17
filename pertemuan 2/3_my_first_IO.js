var fs= require('fs');
var total=fs.readFileSync(process.argv[2]).toString().split("\n").length-1;
console.log(total[0]);
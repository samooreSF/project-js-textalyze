const fs = require('fs')

function readFileSync(file_dir){
  var text = fs.readFileSync(file_dir, 'utf-8');
  return text;
}


let test = readFileSync('../sample_data/moby-dick.txt');
console.log(test)
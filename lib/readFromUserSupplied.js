const fs = require('fs')
const process = require('process')

function readFromUserInput(){
    let readlineSync;
    try {
      readlineSync = require('readline-sync');
    } catch (err) {
      console.log('There is an error');
      process.exit();
    }
    
    var novel = readlineSync.question('Enter the file path to your novel: ');
    var novelName = `${novel}`;
    var text = fs.readFileSync(novelName, 'utf-8');
    return text;
}


let test = readFromUserInput();
console.log(test)
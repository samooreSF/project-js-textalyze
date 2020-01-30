function sanitized(array){
    let cleanArray = [];
    for(let i = 0; i < array.length; i++){
            cleanArray.push(array[i].toLowerCase())
    }
    return cleanArray;
}


let test;
test = sanitized(['abLe', 'ADAS', ' ', '.', 'CASDA.'])
console.log(test)

module.exports = sanitized;
function sanitized(string) {
  return string.toLowerCase().split('');
  // return string.toLowerCase().split(/\s*\b\s*/);
}

let test = sanitized('DRIVING OFF THE CLIFF');
console.log(test);
module.exports = sanitized;

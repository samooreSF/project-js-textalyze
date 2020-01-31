/**
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
 */
function itemCounts(array) {
  let counts = {};
  let track = [];
  let highest_Vals = [];
  for (let item of array) {
    if (!counts.hasOwnProperty(item)) {
      counts[item] = 1;
      track.push(item);  
    } else {
      counts[item] += 1;
    }
  }
  for (let letter of track) {
    highest_Vals.push(counts[letter]);
    counts[letter] = (counts[letter] / array.length);
  }
  highest_Vals.sort();
  console.log(highest_Vals);
  return counts;
}

if (require.main === module) {
  console.log('Running sanity checks for itemcounts:');
  console.log(itemCounts(['a', 'a', 'b', 'b', 'a', 'a', '!', '!']));
}

module.exports = itemCounts;

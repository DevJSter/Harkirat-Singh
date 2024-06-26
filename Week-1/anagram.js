// Function to check if two strings are anagrams
// function sort(str) {
//   return str.split('').sort().join('');
// }
function sort(str) {
 var array = str.split('');
  array.sort();
  return array.join('');  
}
function isAnagram(word1, word2) {
  return sort(word1.toLowerCase()) === sort(word2.toLowerCase());
}

var ans = isAnagram('elbow', 'below');
console.log(ans); // true


module.exports = isAnagram;
 
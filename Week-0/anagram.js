// Function to check if two strings are anagrams
function areAnagrams(str1, str2) {
 // Convert both strings to lowercase and remove any non-alphabetic characters
 const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g, '');
 const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g, '');

 // Sort the characters in both strings
 const sortedStr1 = cleanStr1.split('').sort().join('');
 const sortedStr2 = cleanStr2.split('').sort().join('');

 // Compare the sorted strings
 return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';
console.log(areAnagrams(string1, string2)); // Output: true
 
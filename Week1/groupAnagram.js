function groupAnagrams(strs) {
 const mp = {};

 for (const str of strs) {
     const temp = str.split('').sort().join('');
     if (!mp[temp]) {
         mp[temp] = [];
     }
     mp[temp].push(str);
 }

 const result = Object.values(mp);
 return result;
}

// Test cases
const assert = require('assert');

const test1 = () => {
 const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
 const output = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
 assert.deepStrictEqual(groupAnagrams(input), output);
};

const test2 = () => {
 const input = [""];
 const output = [[""]];
 assert.deepStrictEqual(groupAnagrams(input), output);
};

const test3 = () => {
 const input = ["a"];
 const output = [["a"]];
 assert.deepStrictEqual(groupAnagrams(input), output);
};

test1();
test2();
test3();

console.log('All test cases passed!');

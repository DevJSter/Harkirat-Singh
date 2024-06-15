// Import the function you want to test
const { isAnagram } = require('./anagram');

// Write your test case using the testing framework of your choice (e.g., Jest)
test('isAnagram should return true for valid anagrams', () => {
 // Arrange
 const word1 = 'listen';
 const word2 = 'silent';

 // Act
 const result = isAnagram(word1, word2);

 // Assert
 expect(result).toBe(true);
});

// Write more test cases as needed
const fs = require('fs');

function callback(err,data) {
  console.log(data);

}

fs.readFile("a.txt", 'utf-8', callback);
console.log(callback();
// Path: Week-2/FileWrite.js

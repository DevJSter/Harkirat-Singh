const jwt = require("jsonwebtoken");
const fs = require("fs");
const { log } = require("console");

const secret = "Madhav";
let ans = jwt.sign(
  {
    username: "The supreme personality of Godhead Sri krsna",
    password: "Naam Japa",
  },
  secret
);

console.log(ans);

jwt.verify(ans, secret, (err, originalString) => {
  console.log(originalString);
});

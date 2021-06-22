const fs = require("fs");
module.exports = (message) => {
 return new Promise((resolve, reject) => {
  fs.appendFile("message.txt", `${message}\n`, (err) => {
   err ? reject() : resolve();
  });
 });
};
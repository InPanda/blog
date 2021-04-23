const cmd = require("./cmd");
const file = require("./file");
let day = 30;
const random = (lower, upper) => {
 return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};
const commit = async () => {
 const today = new Date();
 today.setTime(
  today.getTime() - 0 * 24 * 60 * 60 * 1000 - day * 24 * 60 * 60 * 1000
 );
 let commitTime = `${today.getFullYear()}.${
  today.getMonth() 
 }.${today.getDate()}`;
 if (today.getFullYear() > 2021) {
  return;
 }
 let commitNumber = random(1, 10);
 let dayNumber = random(1, 20);
 while (commitNumber) {
  await file(commitTime);
  await cmd("git status");
  await cmd("git add .");
  await cmd(`git commit -m "${commitTime}" --no-edit --date="${commitTime}"`);
  commitNumber--;
 }
 if (day >= 20) {
  day -= dayNumber;
  commit();
 } else {
  // await cmd('git push origin master');
 }
};
commit();
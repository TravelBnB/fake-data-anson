const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const arr = [];
const firstName = [];
const lastName = [];
let count1 = 0;
let count2 = 0;

while (firstName.length < 2500) {
  count1++;
  let name = faker.name.firstName();
  if (firstName.indexOf(name) < 0) {
    firstName.push(name);
  }
}

while (lastName.length < 400) {
  count2++;
  let name = faker.name.lastName();
  if (lastName.indexOf(name) < 0) {
    lastName.push(name);
  }
}

var writer = csvWriter({sendHeaders: false});
writer.pipe(fs.createWriteStream('./users/file1.csv'));
// const file = fs.createWriteStream('./usernames/file1.csv');
let count = 0;
for (let i = 0; i < firstName.length; i++) {
  for (let j = 0; j < lastName.length; j++) {
    for (let k = 0; k < 10; k++) {
      count++;
      let choose = Math.floor(Math.random() * 2);
      if (choose === 1) {
        let code = Math.floor(1 + Math.random() * 126);
        // file.write(`${count},${firstName[i]} ${lastName[j]}_${k},https://s3-us-west-2.amazonaws.com/jae-bae-static/dogs/doggo/${code}.jpeg\n`);
        writer.write({
          count: count,
          name: `${firstName[i]} ${lastName[j]}_${k}`,
          url: `https://s3-us-west-2.amazonaws.com/jae-bae-static/dogs/doggo/${code}.jpeg`
        })
      } else {
        let code = Math.floor(Math.random() * 70);
        if (code < 10) {
          code = '0' + code;
        }
        // file.write(`${count},${firstName[i]} ${lastName[j]}_${k},https://s3-us-west-2.amazonaws.com/jae-bae-static/dogs/doggo/00${code}.jpeg\n`);
        writer.write({
          count: count,
          name: `${firstName[i]} ${lastName[j]}_${k}`,
          url: `https://s3-us-west-1.amazonaws.com/groupout98hr/00${code}.jpg`
        })
      }
    }
  }
}
writer.end();

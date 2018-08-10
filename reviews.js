const fs = require('fs');
const faker = require('faker');
// const file2 = fs.createWriteStream('./reviews/file2.csv');
const csvWriter = require('csv-write-stream');

// const arr = [];
// while (arr.length < ) {
//   if (arr.length % 100 === 0) {
//     arr.push(faker.lorem.paragraphs());
//   } else if (arr.length % 40 === 0) {
//     arr.push(faker.lorem.sentences());
//   } else {
//     arr.push(faker.lorem.word());
//   }
// }

// fs.writeFile('./reviews/four.json', JSON.stringify(arr), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log('success log');
//   }
// })
var writer = csvWriter({sendHeaders: false});
writer.pipe(fs.createWriteStream('./reviews/file3.csv'));
let count = 30000000;
for (let i = 30000000; i < 40000000; i++) {
  count++;
  let listingId = Math.floor(1 + Math.random() * 10000000);
  let userId = Math.floor(1 + Math.random() * 1000000);
  let accuracy = Math.floor(1 + Math.random() * 8) / 2;
  let communication = Math.floor(1 + Math.random() * 8) / 2;
  let cleanliness = Math.floor(1 + Math.random() * 8) / 2;
  let location = Math.floor(1 + Math.random() * 8) / 2;
  let checkIn = Math.floor(1 + Math.random() * 8) / 2;
  let value = Math.floor(1 + Math.random() * 8) / 2;
  let theTime = faker.date.between('1999-01-01', '2018-08-08').toISOString();
  let timeStr = theTime.slice(0, 10) + ' ' + theTime.slice(11, 19);
  let text = faker.lorem.paragraph();
  // file2.write(`${count},${listingId},${userId},${accuracy},${communication},${cleanliness},${location},${checkIn},${value},${timeStr},${text}\n`);
  writer.write({
    count,
    listingId,
    userId,
    accuracy,
    communication,
    cleanliness,
    location,
    checkIn,
    value,
    timeStr,
    text
  })
}

writer.end();

// for (let i = 0; i < 5000000; i++) {
//   count++;
//   let listingId = Math.floor(1 + Math.random() * 10000000);
//   let userId = Math.floor(1 + Math.random() * 1000000);
//   let theTime = faker.date.between('1999-01-01', '2018-08-08').toISOString();
//   let timeStr = theTime.slice(0, 10) + ' ' + theTime.slice(11, 19);
//   let text = faker.lorem.paragraph();
//   file.write(`${count},${listingId},${userId},${timeStr},${text}\n`);
// }

// let count = 5000000;
// for (let i = 5000000; i < 10000000; i++) {
//   count++;
//   let listingId = Math.floor(1 + Math.random() * 10000000);
//   let userId = Math.floor(1 + Math.random() * 1000000);
//   let theTime = faker.date.between('1999-01-01', '2018-08-08').toISOString();
//   let timeStr = theTime.slice(0, 10) + ' ' + theTime.slice(11, 19);
//   let text = faker.lorem.paragraph();
//   file.write(`${count},${listingId},${userId},${timeStr},${text}\n`);
// }

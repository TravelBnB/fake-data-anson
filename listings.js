var faker = require('faker/locale/de');
var fs = require('fs');
// city, styles, property type

// var arr = [];

// while (arr.length < 10000) {
//   var adj = faker.address.city();
//   if (arr.indexOf(adj) < 0) {
//     arr.push(adj);
//   }
// }
// for (var i = 0; i < 100; i++) {
//   arr.push(faker.commerce.productAdjective());
// }

const styles = [
  'Fantastic',
  'Sleek',
  'Awesome',
  'Tasty',
  'Gorgeous',
  'Rustic',
  'Small',
  'Cozy',
  'Warm',
  'Stylish'
];

const place = [
  'Loft',
  'Studio',
  'House',
  'Cabin',
  'Space',
  'Home',
  'Farm',
  'Tent',
  'Villa',
  'Flat'
];

const scenes = [
  'ocean view',
  'sea view',
  'pool',
  'good view',
  'river view',
  'cereals',
  'view',
  'dogs',
  'cats',
  'rabbits'
];

fs.readFile('./cities.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {

    const cities = JSON.parse(data);
    let count = 0;
    const file1 = fs.createWriteStream('./file1.csv');
    for (var i = 0; i < styles.length; i++) {
      for (var j = 0; j < place.length; j++) {
        for (var k = 0; k < 10000; k++) {
          for (var m = 0; m < scenes.length; m++) {
            count++;
            file1.write(
              `${count},${styles[i]} ${place[j]} in ${cities[k]} with ${scenes[m]}\n`
            )
          }
        }
      }
    }
  }
})

// fs.readFile('./data/one.json', (err, data) => {
//   console.log(JSON.parse(data).length);
// })









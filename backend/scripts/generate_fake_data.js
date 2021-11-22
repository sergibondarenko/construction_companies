/* global __dirname */
const path = require('path');
const fs = require('fs');
const faker = require('faker');

const pathToData = path.resolve(__dirname, '../data/data.json');
const specialities = ['excavation', 'plumbing', 'electrical'];

const res = [];

for (let i = 0; i < 100; i++) {
  const speciality = specialities[Math.floor(Math.random() * specialities.length)];
  const name = faker.company.companyName();
  const city = faker.address.city();
  //const logo = faker.image.business();
  const logo = 'http://placekitten.com/g/200/300';

  res.push({
    name, speciality, city, logo
  });
}

fs.writeFileSync(pathToData, JSON.stringify(res, null, 2));

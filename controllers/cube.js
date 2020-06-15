const fs = require('fs');
const path = require('path');

const dbFile = path.join(__dirname, '..', '/config/database.json');

const getCubes = () => {
  fs.readFile(dbFile, (err, dbData) => {
    if (err) {
      throw error;
    }
    const cubes = JSON.parse(dbData);
    return cubes;
  });
};

module.exports = {
  getCubes,
};

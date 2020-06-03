const { v4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const dbFile = path.join(__dirname, '..', '/config/database.json');

class Cube {
  constructor(name, description, imgUrl, difficulty) {
    this.id = v4();
    this.name = name || 'no name';
    this.description = description;
    this.imgUrl = imgUrl || 'placeholder';
    this.difficulty = difficulty || 0;
  }

  //toDo saveCube()
  save() {
    const newCube = {
      id: this.id,
      name: this.name,
      description: this.description,
      imgUrl: this.imgUrl,
      difficulty: this.difficulty,
    };

    fs.readFile(dbFile, (err, dbData) => {
      if (err) {
        throw error;
      }
      const cubes = JSON.parse(dbData);
      cubes.push(newCube);

      fs.writeFile(dbFile, JSON.stringify(cubes), (error) => {
        if (error) {
          throw error;
        }
        console.log('new cube is successfully stored');
      });
    });
  }
}

module.exports = Cube;

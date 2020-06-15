const Cube = require('../models/cube');

const newCube1 = new Cube(
  'default1'
  //   'this is a default1 cube',
  //   'https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg',
  //   3
);

const newCube2 = new Cube(
  'default2',
  'this is a default2 cube',
  'https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg',
  7
);

const newCube3 = new Cube(
  'default3',
  'this is a default3 cube',
  'https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg',
  7
);

const newCube4 = new Cube(
  'default4',
  'this is a default4 cube',
  'https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg',
  7
);

newCube1.save();
// newCube2.save();

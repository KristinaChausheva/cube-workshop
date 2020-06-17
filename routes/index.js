// TODO: Require Controllers...

const { Router } = require('express');
const { getAllCubes } = require('../controllers/cubes');
const Cube = require('../models/cube');

const router = Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Cube Workshop',
    cubes: getAllCubes(),
  });
});
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
  });
});
router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create a Cube',
  });
});
router.post('/create', (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  const cube = new Cube(name, description, imageUrl, difficultyLevel);
  cube.save((err) => {
    if (err) {
      console.error(err);
    } else {
      res.redirect('/');
    }
  });
});
router.get('/details/:id', (req, res) => {});
router.get('*', (req, res) => {
  res.render('404', {
    title: 'Page not found',
  });
});

module.exports = router;

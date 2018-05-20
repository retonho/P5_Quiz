const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Credits page.
router.get('/credits', (req, res, next) => {
    res.render('credits');
});

// Quizzes page.
router.get('/quizzes', (req, res, next) => {
    res.render('quizzes');
});

module.exports = router;

const express = require('express');
const router = express.Router();

// Middleware to check if a username is provided
const checkUsername = (req, res, next) => {
  const usr = req.query.username;
  if (!usr) {
    res.redirect('/login');
  } else {
    req.username = usr;
    next();
  }
};

// Login page
router.get('/login', (req, res) => {
  res.render('index');
});


// Home page
// router.get('/home', checkUsername, (req, res) => {
//   const cuisine = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Pescetarian'];
//   res.render('pages/home', {
//     title: "Home",
//     user: req.username,
//     kitchen: cuisine
//   });
// });

module.exports = router;
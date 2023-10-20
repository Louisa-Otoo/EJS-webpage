const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
// const User = require('./models/user'); // Your user model
const app = express();

const expressLayouts = require('express-ejs-layouts');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true }));


app.set('view engine', 'ejs'); // set view engine


app.use(express.static(path.join(__dirname, 'public'))); // static files path


app.get('/', (req, res) => {
  res.render('login.ejs');
});

app.get('/menu', (req, res) => {
  const pageTitle = 'Menu Page'
  const kitchen = ['Italian', 'Japanese', 'Mexican'];
  const cuisine = ['snacks', 'beverages', 'dinner'];

  const meals = [
    { name: 'Sushi pie', price: 25.50, image: 'sushi.jpg', description: 'Delicious sushi pie' },
    { name: 'Dumplings', price: 17.50, image: 'dumplings.jpg', description: 'Tasty dumplings' },
  ];
  res.render('menu.ejs', { layout: 'partials/sidebar', pageTitle, kitchen, cuisine, meals });
});


// Registration route
// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//   // Hash the password and save user data to the database
//   const newUser = new User({ username, password });
//   await newUser.save();
//   res.redirect('/login');
// });

// Login route
app.post('/', async (req, res) => {
  const { username, password } = req.body;
  // Authenticate the user
  const user = await User.findOne({ username, password });
  if (user) {
    req.session.user = user; // Store the user in the session
    res.redirect('/menu');
  } else {
    res.redirect('/');
  }
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// menu route (protected)
app.get('/menu', (req, res) => {
  if (req.session.user) {
    // User is authenticated
    // Render the homepage
  } else {
    res.redirect('/');
  }
});


// API route to fetch data
app.get('/api/data', async (req, res) => {
  try {
    // Fetch data from the database
    const data = await knex('table_name').select('*');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});



const PORT = process.env.PORT || 5233

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));
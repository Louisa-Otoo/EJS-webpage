
const knex = require('../../config/database');

const mealController = {
  // Landing page handler
  landingPage: async (req, res) => {
    try {
      const username = req.query.username;

      if (!username) {
        // Redirect to the login page if no username is provided
        return res.redirect('/');
      }

      // Sample cuisine types
      const cuisineTypes = ['Mexican', 'Italian', 'Japanese'];

      // Fetch meals from the database (assumes Knex.js configuration)
      const meals = await knex('meals').select('*').orderBy('id', 'desc');

      if (!meals || meals.length === 0) {
        // Handle case where no meals are found
        return res.render('notFound', {
          title: 'No Meal Found',
          user: username,
        });
      }

      // Render the home page with data
      return res.render('/menu', {
        title: 'Welcome to Our Menu',
        user: username,
        cuisine: cuisineTypes,
        mealList: meals,
      });
    } catch (error) {
      console.error('Error in landingPage:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  // for viewing a meal
  getMeal: (req, res) => {
    return res.render('/meal', {
      title: 'Meal Details',
    });
  },

  // for deleting a meal
  deleteMeal: (req, res) => {
    return res.render('/meal', {
      title: 'Delete Meal',
    });
  },
};

module.exports = mealController;



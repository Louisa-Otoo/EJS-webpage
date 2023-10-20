/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries

    exports.seed = async function (knex) {
      // Insert initial meal data
      const mealData = [
        {
          name: 'Sushi Pie',
          description: 'a healthy dish for the family',
          price: 39,
          is_vegetarian: true,
          image: 'https://example.com/images/burger.jpg',
        },
       
        {
          name: 'Dumpling',
          description: 'a vegatble meal for all',
          price: 25,
          is_vegetarian: true,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Xiaolongbao-breakfast.jpg/1200px-Xiaolongbao-breakfast.jpg',
        },  
      ];
    
      try {
        // Delete existing entries
        await knex('meals').del();
    
        // Insert new meal data
        await knex('meals').insert(mealData);
    
        console.log('Meal data has been seeded successfully.');
      } catch (error) {
        console.error('Error seeding meal data:', error);
      }
    }
  }


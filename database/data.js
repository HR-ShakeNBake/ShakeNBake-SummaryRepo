const faker = require('faker');
const db = require('../database')

//random recipe name generator

const randomInArray = (array) => {
  return array[Math.floor(Math.random()*array.length)];
}

const generateRecipeName = () => {
  const adjectives = [
    'Cheesy','Spicy','Smoked','Grilled',
    'Baked', 'Boiled', 'Mom\'s', 'Dad\'s',
    'Grandma\'s', 'Grandpa\'s', 'BBQ', 'Vegetarian',
    'Vegan', 'Healthy', 'Gluten-Free', 'Low-Calorie',
    'Low-Fat', 'Gourment', 'Paleo', 'Keto', 'High-Fiber', 
    'Delicious', 'Sweet', 'Salty', 'Savory', 'Secret Recipe'
  ];
  const food = [
    'Chicken', 'Beef', 'Pork', 'Spaghetti', 'Chili',
    'Mac And Cheese', 'Ramen', 'Potatoes', 'Lamb',
    'Turkey', 'Lobster', 'Clam Chowder', 'Pot Roast',
    'Shrimp', 'Tuna', 'Curry', 'Steak', 'Lunchable',
    'Pizza', 'Oysters', 'Clams', 'Mussels', 'Pizza', 
    'Bacon', 'Salmon', 'Burger', 'Salad', 'Poke Bowl'
  ];
  return `${randomInArray(adjectives)} ${randomInArray(food)}`;
}

// generate a users and add to mysql db
// const generateUsers = function() {
//   let username = faker.internet.userName();
//   let avatar = faker.internet.avatar();
//   let follower = Math.floor(Math.random()*100);
//   let favorite = Math.floor(Math.random()*100);
//   let recipeMade = Math.floor(Math.random()*100);
//   var params = [username, avatar, follower, favorite, recipeMade]
//   let sql = 'INSERT INTO users (username, avatarURL, followers, favorites, recipesMade) VALUES(?, ?, ?, ?, ?)';
//   db.connection.query(sql, params, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('user data posted')
//     }
//   }) 
// }

// //create 100 users
// for (let i = 0; i < 100; i++) {
//   generateUsers();
// } 

// const generateRecipes = function() {
//   let recipeName = generateRecipeName();
//   let userId = Math.floor(Math.random()*99) + 1;
//   let description = faker.lorem.paragraph();
//   let params = [recipeName, userId, description];
//   let sql = 'INSERT INTO recipes (recipeName, userId, recipeDescription) VALUES(?, ?, ?)';
//   db.connection.query(sql, params, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('recipe posted')
//     }
//   }) 
// }

// //create 100 recipes
// for (let i = 0; i < 100; i++) {
//   generateRecipes();
// }

// const generateReviews = function(num) {
//   let userId = num;
//   let recipeId = num;
//   let rating = Math.floor(Math.random()*4) + 1;
//   let submitDate = faker.date.past();
//   let likes = Math.floor(Math.random()*100);
//   let text = faker.lorem.paragraph();
//   let params = [userId, recipeId, rating, submitDate, likes, text]
//   let sql = 'INSERT INTO reviews (userId, recipeId, rating, submitDate, likes, reviewText) VALUES(?, ?, ?, ?, ?, ?)';
//   db.connection.query(sql, params, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('review posted')
//     }
//   }) 
// }

// //create random reviews for each recipe (between 1-10 reviews per recipe)
// for (let i = 1; i <= 100; i++) {
//   for (let j = 0; j < Math.floor(Math.random()*9) + 1; j++ )
//     generateReviews(i);
// }

const generatePhotos = function(num) {
  let recipeId = num;
  let url = faker.image.image();
  let comment = '';
  if (num%3){
    comment = faker.lorem.paragraph();
  }
  let userId = Math.floor(Math.random()*99) + 1;
  let params =[url, userId, recipeId, comment]
  let sql = 'INSERT INTO photos (photoURL, userId, recipeId, comment) VALUES(?, ?, ?, ?)';
  db.connection.query(sql, params, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('photo posted')
    }
  }) 
}

//create random photo for each recipe (between 2-10 photos per recipe)
for (let i = 1; i <= 100; i++) {
  for (let j = 0; j < Math.floor(Math.random()*8) + 2; j++ )
    generatePhotos(i);
}

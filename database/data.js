const faker = require('faker');
const db = require('../database');
const moment = require('moment');

random recipe name generator

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
const generateUsers = function() {
  let username = faker.internet.userName();
  let avatar = faker.internet.avatar();
  let follower = Math.floor(Math.random()*100);
  let favorite = Math.floor(Math.random()*100);
  let recipeMade = Math.floor(Math.random()*100);
  var params = [username, avatar, follower, favorite, recipeMade]
  let sql = 'INSERT INTO users (username, avatarURL, followers, favorites, recipesMade) VALUES(?, ?, ?, ?, ?)';
  db.connection.query(sql, params, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('user data posted')
    }
  }) 
}

//create 100 users
for (let i = 0; i < 100; i++) {
  generateUsers();
} 

const generateRecipes = function() {
  let recipeName = generateRecipeName();
  let userId = Math.floor(Math.random()*99) + 1;
  let description = faker.lorem.paragraph();
  let made = Math.floor(Math.random()*9999) + 1;
  let params = [recipeName, userId, description, made];
  let sql = 'INSERT INTO recipes (recipeName, userId, recipeDescription, made) VALUES(?, ?, ?, ?)';
  db.connection.query(sql, params, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('recipe posted')
    }
  }) 
}

//create 100 recipes
for (let i = 0; i < 100; i++) {
  generateRecipes();
}

const generateReviews = function(num) {
  let userId = Math.floor(Math.random()*99) + 1
  let recipeId = num;
  let rating = Math.floor(Math.random()*4) + 1;
  let date = moment().subtract(Math.floor(Math.random()*1000), 'days');
  let submitDate = date.format('MMMM Do YYYY');
  let numericDate = date.format().slice(0, 10).replace('-', '').replace('-', '');
  let likes = Math.floor(Math.random()*100);
  let text = faker.lorem.paragraph();
  let params = [userId, recipeId, rating, submitDate, numericDate, likes, text]
  let sql = 'INSERT INTO reviews (userId, recipeId, rating, submitDate, numericDate, likes, reviewText) VALUES(?, ?, ?, ?, ?, ?, ?)';
  db.connection.query(sql, params, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('review posted')
    }
  }) 
}

//create random reviews for each recipe (between 1-10 reviews per recipe)
for (let i = 1; i <= 1; i++) {
  for (let j = 0; j < 10; j++ )
    generateReviews(i);
}
for (let i = 1; i <= 100; i++) {
  for (let j = 0; j < Math.floor(Math.random()*9) + 1; j++ )
    generateReviews(i);
}

const pictures = ['https://s.hdnux.com/photos/72/15/17/15350667/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15352415/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15346423/7/premium_landscape.jpg',
 'https://s.hdnux.com/photos/72/15/17/15347780/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15351888/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15351104/7/premium_landscape.jpg',
 'https://s.hdnux.com/photos/72/15/17/15346491/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15346499/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15347796/7/premium_landscape.jpg',
 'https://s.hdnux.com/photos/72/15/17/15346491/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15352160/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15352126/7/premium_landscape.jpg',
 'https://s.hdnux.com/photos/72/15/17/15351111/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15351873/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15351099/7/premium_landscape.jpg',
 'https://s.hdnux.com/photos/72/15/17/15351870/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15351258/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15352488/7/premium_landscape.jpg',
 'https://s.hdnux.com/photos/72/15/17/15351087/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15347660/7/premium_landscape.jpg', 'https://s.hdnux.com/photos/72/15/17/15346506/7/premium_landscape.jpg',
];

const generatePhotos = function(num, num1) {
  let recipeId = num;
  let url = pictures[num1];
  let comment = '';
  if (Math.floor(Math.random()*10) % 3 === 0){
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
for (let i = 1; i <= 1; i++) {
  for (let j = 0; j < pictures.length; j++ )
    generatePhotos(i, j);
}

for (let i = 2; i <= 100; i++) {
  for (let j = 0; j < Math.floor(Math.random()*8) + 2; j++ )
    generatePhotos(i);
}

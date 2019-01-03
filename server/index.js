const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database')
const cors = require('cors')

const app = express();
const PORT = 4000;

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/recipe', (req, res) => {
  console.log('serving get request');
  var results = {};
  var sql = 'SELECT photos.photoURL, recipes.recipeName, users.username, photos.comment, users.avatarURL ' + 
            'FROM photos INNER JOIN recipes ON photos.recipeId = recipes.recipeId ' + 
                        'INNER JOIN users ON photos.userId = users.userId ' + 
            'WHERE photos.recipeId = 1;';
  var sql1 = 'SELECT users.username, users.avatarURL, users.favorites, users.followers, users.recipesMade, reviews.rating, reviews.submitDate, reviews.numericDate, reviews.likes, reviews.reviewText ' + 
             'FROM reviews INNER JOIN users ON reviews.userId = users.userId ' + 
             'WHERE reviews.recipeId = 1;';
  var sql2 = 'SELECT recipes.recipeName, recipes.recipeDescription, recipes.made, users.avatarURL, users.username, users.followers ' + 
             'FROM recipes INNER JOIN users ON recipes.userId = users.userId ' + 
             'WHERE recipes.recipeId = 1;';
  db.connection.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      results.photos = data;
      let photoNum = data.length;
      db.connection.query(sql1, (err, data) => {
        if (err) {
          console.log(err);
        }
        if (data) {
          results.reviews = data;
          let reviewNum = data.length;
          let rating = 0;
          for (let i = 0; i < data.length; i++) {
            rating += data[i].rating;
          }
          let avgRating = Math.ceil(rating/data.length *2)/2;
          db.connection.query(sql2, (err, data) => {
            if (err) {
              console.log(err);
            }
            if (data) {
              let summary = data;
              summary[0].photoNum = photoNum;
              summary[0].reviewNum = reviewNum;
              summary[0].avgRating = avgRating;
              results.summary = summary;
              res.status(200).send(JSON.stringify(results));
            }
          })
        }
      })
    }
  })
});

app.post('http://localhost:4000/recipe', (req, res) => {
  console.log('serving post request');
  var sql = 'INSERT INTO photos (photoURL, userId, recipeId, comment) VALUES (?, ?, ?, ?);'
  var photo = req.body;
  var params = [photo.photoURL, photo.userId, photo.recipeId, photo.comment];
  db.connection.query(sql, params, (err, results) => {
    if (err) {
      res.status(501).send(err)
    } else {
      res.status(201).end();
    }
  })
  res.status(201).end();
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

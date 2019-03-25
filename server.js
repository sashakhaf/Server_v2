var express = require('express');
var fetch = require('node-fetch');
var app = express();
app.set('view engine', 'ejs');

var apiUrl = 'https://jsonplaceholder.typicode.com';

app.get('/', function (req, res) {
  fetch(apiUrl + '/posts')
    .then(response => response.json())
    .then(json => {
      //console.log(json);
      res.render('index', {
          posts: json
      })
    });
})

app.get('/post/:postId', function (req, res) {
  Promise.all([getPost(req.params.postId), getComments(req.params.postId)].map(handleRejection))
    .then(results=> {
      res.render('post', {
          post: results[0],
          comments: results[1]
      })
    });
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})


function handleRejection(p) {
    return p.catch(err=> ({ error: err }));
}

async function getPost(id) {
  return await fetch(apiUrl + '/posts/' + id)
    .then(response => response.json())
    .then(json => json);
}

async function getComments(postId) {
  return await fetch(apiUrl + '/posts/' + postId + '/comments')
    .then(response => response.json())
    .then(json => json);
}

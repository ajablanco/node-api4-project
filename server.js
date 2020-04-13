const express = require('express');
const helmet = require('helmet');

// Authenticate via API Key
var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'p4qFogZHRZnjUONyITUrDRk0ZILZRdtEBNnmCdAPz7W7kUqPoJ',
  consumer_secret: 'mqqrT3NryBZG5HVplMA50XsIlStNvG1XOCIR71cF8rOLQmnykm',
  token: 'aeK2IMwiO3Ry4mttApdmpvWfxRkADgLyeHJEKoNS1s8GKinz6A',
  token_secret: 'X8Z2nV56tp4JxqOeMUZvePd9ElKE7ldEN4sE4oRMpbeCxxPXd3'
});

// Make the request
client.userInfo(function(err, data) {
  data.user.blogs.forEach(function(blog) {
    console.log(blog.name);
  });
});

client.blogAvatar('somewhereintheabyss', function (err, data) {
  console.log(data)
});

 
client.blogPosts('somewhereintheabyss', {type: 'photo', tag: ['aja']}, function(err, resp) {
  console.log(resp); // now we've got all kinds of posts
});

const server = express();
server.use(express.json());


server.get("/", (req, res) => {
  res.status(200).json({api: "it's working"})
})

server.get("/userinfo", (req, res) => {
  res.status(200).json(client.userInfo())
});

server.get("/avatar", (req, res) => {
  res.status(200).json(client.blogAvatar('somewhereintheabyss'))
});

server.get("/blogposts", (req, res) => {
  res.status(200).json(client.blogPosts('somewhereintheabyss'))
})

server.use(helmet());


module.exports = server;
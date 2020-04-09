const express = require('express');
const helmet = require('helmet');


const tumbRouter = require('./tumblrRouter.js')

// Authenticate via API Key
const tumblr = require('tumblr.js');
const client = tumblr.createClient({ consumer_key: 'p4qFogZHRZnjUONyITUrDRk0ZILZRdtEBNnmCdAPz7W7kUqPoJ' });

// Make the request
client.blogPosts('somewhereintheabyss.tumblr.com', { type: 'photo' }, function (err, data) {
    console.log('working')
});


const server = express();

server.use(helmet());

server.use('https://api.tumblr.com/', tumbRouter);


module.exports = server;
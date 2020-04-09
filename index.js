const express = require('express');
// Authenticate via API Key
const tumblr = require('tumblr.js');
const client = tumblr.createClient({ consumer_key: 'p4qFogZHRZnjUONyITUrDRk0ZILZRdtEBNnmCdAPz7W7kUqPoJ' });

// Make the request
client.blogPosts('somewhereintheabyss.tumblr.com', { type: 'photo' }, function (err, data) {
    console.log('working')
});


const server = express();

server.use(express.json());

server.get('https://api.tumblr.com/', (req, res) => {
    res(200).json({message: "success"})
})

const port = process.env.PORT || 5007;
server.listen(port);
console.log(`server is running on port`)
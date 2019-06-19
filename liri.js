require("dotenv").config();


var keys = require("./keys.js");

var fs = require('fs')

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
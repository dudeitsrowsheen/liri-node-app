// REQUIRE THE .env file
require("dotenv").config();
// REQUIRE FILE SYSTEM
var fs = require('fs')
// LINKED KEY PAGE
var keys = require("./keys.js");

var request = require('fs')
var request = require('request');

//REQUIRE spotify api/and link
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var getMeSpotify = function (songName) {

  // Spotify search function
  spotify.search({ type: 'track', query: 'All the Small Things' },
    function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
        return;
      }

      console.log(data.tracks.items[0]);
    });
}
  // for loop in Spotify
  // let spotifyArr = data.tracks.items;

  // for (var i = 0; i < spotifyArr.length; i++) {

  // };

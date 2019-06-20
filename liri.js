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


let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");

var pick = function (userInput, userQuery) {
  switch (userInput) {
    case 'spotify-this-song':
      getMeSpotify(userQuery)
      break;
    case "do-this":
      doThis(userQuery);
      break;
    default:
      console.log("I don't understand this is dumb");
      break;
    // default:
    //   console.log('Liri does not know that');
  }
}

userCommand(userInput, userQuery);

var getArtistNames = function (artist) {
  return artist.name;
}
var getMeSpotify = function (userQuery) {


  function spotifyThisSong() {

    if (!userQuery) {
      userQuery = "the sign ace of base"
    };
    // Spotify search function
    spotify.search({ type: 'track', query: userQuery, }, function (err,
      data) {
      if (err) {
        console.log('Error occurred: ' + err);
        return;
      }
      var songs = data.tracks.items;
      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log('artist(s): ' + songs[i] + artists.map(
          getArtistNames));
        console.log('song name: ' + songs[i].name);
        console.log('album: ' + songs[i].preview_url);
        console.log('album ' + songs[i] + album.name);
        console.log('-------------------------------------');
      }
      // console.log(data.tracks.items[0]);
    });
  }
  var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
  };

  runThis(process.argv[2], process.argv[3]);
}

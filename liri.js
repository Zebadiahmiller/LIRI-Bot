require("dotenv").config();
const Spotify = require('node-spotify-api');
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
let nodeArg = process.argv;


let spotifyQuery="";

for (let i =3; i < nodeArg.length; i++){
    if (i > 2 && nodeArg.length && process.argv[2] === "spotify-this-song"){
        spotifyQuery = spotifyQuery + " " + nodeArg[i]
    }
   }
   if (process.argv[2]==="spotify-this-song" && process.argv[3]==null){
       spotifyQuery ="The Sign"
   }
console.log(spotifyQuery)


spotify
  .search({ type: 'track', query: spotifyQuery })
  .then(function(response) {
    console.log(response.tracks.items[0].artists[0].name);
    console.log(response.tracks.items[0].name);
    console.log(response.tracks.items[0].preview_url);
    console.log(response.tracks.items[1].album.name);
  })
  .catch(function(err) {
    console.log(err);
  });



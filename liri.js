require("dotenv").config();
const Spotify = require('node-spotify-api');
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
let nodeArg = process.argv;

//////// Spotify call/////
if (process.argv[2]==="spotify-this-song"){
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
}
//////////bands in town/////////

// var BandsInTownEvents = require("bandsintown-events")
// var Events = new BandsInTownEvents();

// //set options for instance
// //app_id and artists are required
// Events.setParams({
//   "app_id":"myappname", //can be anything
//   "artists":[ //accepts string for single artist or an array of artist names
//     "Wilco",
//     "Yeah Yeah Yeahs"
//   ]
// });

// //get your events with success and error callbacks
// Events.getEvents(function( events ){
//   for(var i = 0; i < events.length; i++){
//     console.log( events[i].venue.city + ", " + events[i].venue.region );
//   }
// },function( errors ){
//   console.log(errors);
// });
///////////////////////OMDB API///////////////////////////
if (process.argv[2]==="movie-this"){
const omdb = require('omdb');
let movieName = "";

for (let i =3; i < nodeArg.length; i++){
    if (i > 2 && nodeArg.length && process.argv[2] === "movie-this"){
        movieName = movieName + "+" + nodeArg[i]
    }
   }
   if (process.argv[2]==="movie-this" && process.argv[3]==null){
       movieName ="Mr.Nobody"
   }






const queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=7461ba47";


axios.get(queryUrl).then(
    function(response) {
        console.log("Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("Imdb: " + response.data.imdbRating);
      console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
      console.log("Production Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors/Actresses: " + response.data.Actors);
    }
  );
}
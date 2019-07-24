require("dotenv").config();
const Spotify = require('node-spotify-api');
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
var moment = require('moment');
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
if (process.argv[2] === "concert-this"){
    let artist="";

for (let i =3; i < nodeArg.length; i++){
    if (i > 2 && nodeArg.length && process.argv[2] === "concert-this"){
        artist = artist + nodeArg[i]
    }
   }
   if (process.argv[2]==="concert-this" && process.argv[3]==null){
       artist ="Nelly"
   }



const queryBands = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


axios.get(queryBands).then(
    function(response) {

        for( let i =0; i<response.data.length; i++) {
        console.log("Venue: " + response.data[i].venue.name);
        console.log("City: " + response.data[i].venue.city);
        console.log("State " + response.data[i].venue.region);
        console.log("Date " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
        };
        });

};

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
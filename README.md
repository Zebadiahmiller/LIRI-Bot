# LIRI-Bot

Welcome to LIRI-Bot!
With this program you are able to find info to movies, songs, and concert location of any band!
## LIRI-Concerts
-------
With LIRI-Concerts you are able to enter any band name and see locations and dates of upcoming concerts.
In order to access the information enter the command  line <span style="color:#00cdcd">*node liri.js concert-this <artist/band name here>*</span>.

This will then search the Bands in Town Artist Events API and return.

+ Name of the venue
+ Venue location
+ Date of the Event (use moment to format this as "MM/DD/YYYY")

If there are no concerts in the foreseable future it returns <span style="color:#9370db"> No concerts in the foreseeable future!</span>



![](assets/images/concerts1.png)
![](assets/images/concerts2.png)

------
## LIRI-Movies
-------
With LIRI-Movies you are able to enter any movie title and see information about that movie.
In order to access the information enter the command  line <span style="color:#128BB5">*node liri.js movie-this '<movie name here>'*</span>.

This will then search the OMDB API and return.

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.


If there is no movie is typed into the search area it returns results for <span style="color:#deb522">Mr.Nobody</span>
![](assets/images/movies.png)

------
## LIRI-Spotify
-------
With LIRI-Spotify you are able to enter any song and see artist and album information about that song.
In order to access the information enter the command  line <span style="color:#828282">*node liri.js spotify-this-song '<song name here>'*</span>.

This will then search the Spotify API and return.

+ Artist(s)
+ The song's name
+ A preview link of the song from Spotify
+ The album that the song is from

If no preview is availabe it returns <span style="color:#ecebe8">No preview available for this song</span>


If no song is typed into the search area it returns results for <span style="color:#84bd00">Lazy Eye by the Silversun Pickups</span>
![](assets/images/songs.png)

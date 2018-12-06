// NODE DEPENDENCIES
const axios = require('axios');
const spotify = require('node-spotify-api');
const moment = require('moment');
const dotenv = require('dotenv').config();
const fs = require('fs');


let liri = process.argv[2];

// LIRI FUNCTIONS
function spotifySearch() {
    // using songName
        // log--Artist(s)
        // log--Song Name
        // log--Preview Link
        // log--Album Name
}
function movieSearch() {
    // using movieName
        // log--Movie Title
        // log--Year the movie came out
        // log--IMDB Rating
        // log--Rotten Tomatoes
        // log--Country of production
        // log--Movie language
        // log--Movie plot
        // log--Actors
}
function bandSearch() {
    // using bandName
        // log--Venue Name
        // log--Venue Location
        // log--Date of the Event
            // use moment (MM/DD/YYYY)
}
function random() {

}





// LIRI COMMANDS
    // LIRI HELP
if (liri==='commands' || 'help' || 'command' || '?' || '/h' || '/help') {
    console.log('Available commands include:');
    console.log('node liri spotify <"song-name">');
    console.log('node liri bands <"band-name">');
    console.log('node liri movie <"movie-name">');
    // ~~~~~~~~~~~~UPDATE BELOW~~~~~~~~~~~~~~~
    console.log('node liri moment <*******>');
    console.log('node liri random');
    console.log('node liri do-what-it-says');
}
    // LIRI---SPOTIFY
if (liri==='spotify') {
    let songName = process.argv[3];
    if (songName==="") {
        songName==="The Sign";
        spotifySearch(songName);
    }
    else {
    spotifySearch(songName);
    }
}

    // LIRI--BANDS IN TOWN
if (liri==='bands' || 'band') {

}
    // LIRI---OMDB
if (liri==='movie' || 'movies') {

}
    // LIRI---MOMENT
if (liri==='moment') {

}
    // LIRI---DOTENV
if (liri==='dotenv') {

}
    // LIRI---DO WHAT IT SAYS
if (liri==='do-what-it-says') {

}
// NODE DEPENDENCIES
const axios = require('axios');
const spotify = require('node-spotify-api');
const moment = require('moment');
const dotenv = require('dotenv').config();
const fs = require('fs');


let liri = process.argv[2];
let query = process.argv[3];

// LIRI FUNCTIONS
function spotifySearch() {
    // using songName
    // log--Artist(s)
    // log--Song Name
    // log--Preview Link
    // log--Album Name
}
function movieSearch() {
    // if (query='') {
    //     query='Mr. Nobody'
    // }
    axios.get(`http://www.omdbapi.com/?t=${query}&y=&plot=short&apikey=trilogy`).then(
        function (response) {
            let rd = response.data;
            // log--Movie Title
            console.log(`The movie is titled: ${rd.Title}.`);
            // log--Year the movie came out
            console.log(`${rd.Title} was released in the year ${rd.Year}.`);
            // log--IMDB Rating
            console.log(`IMDB users rated it a ${rd.imdbRating}/10 with ${rd.imdbVotes} votes.`);
            // log--Rotten Tomatoes
            console.log(`Rotten Tomatoes gave a ${rd.Ratings[1].Value} positive feedback.`);
            // log--Country of production
            console.log(`${rd.Title} was produced in ${rd.Country} by ${rd.Production}.`);
            // log--Movie language
            console.log(`Language(s) include ${rd.Language}.`);
            // log--Movie plot
            console.log(`The plot involves ${rd.Plot}`);
            // log--Actors
            console.log(`It stars ${rd.Actors}.`);
            // log--Writers and Directors
            console.log(`It is written by ${rd.Writer} and directed by ${rd.Director}.`);
        }
    );
}

function bandSearch() {
    axios.get(`https://rest.bandsintown.com/artists/${query}/events?app_id=codingbootcamp`).then(
        function (response) {
            let rd = response.data;
            let bandName = rd[0].lineup;
            let venueCity = rd[0].venue.city;
            let venueRegion = rd[0].venue.region;
            let venueCountry = rd[0].venue.country;
            let venueName = rd[0].venue.name;
            let timeUTC = rd[0].datetime;
            // LOG--Venue Name
            console.log(`${bandName}'s next show is "${venueName}".`);
            // LOG--Venue Location
            console.log(`It's going to take place in ${venueCity}, ${venueRegion}, ${venueCountry}.`);
            // LOG--Date of the event
                // Moment turns timeUTC to MM/DD/YYYY
        }
    )
}
function random() {

}

function showHelp() {
    console.log('Available commands include:');
    console.log('node liri spotify <"song-name"> to search for a song by name.');
    console.log('node liri bands <"band-name"> to find an artists upcoming performances.');
    console.log('node liri movie <"movie-name"> to find out movie details');
    // ~~~~~~~~~~~~UPDATE BELOW~~~~~~~~~~~~~~~
    console.log('node liri moment <*******>');
    console.log('node liri random');
    console.log('node liri do-what-it-says');
    console.log('Please remember to use "" for any multi-word searches.')
}

// SWITCH CASES---LIRI
switch (liri) {

    // SPOTIFY CASE
    case 'spotify':
    case 'music':
        spotifySearch();
        break;

    // MOVIE CASE
    case 'movie':
    case 'movies':
    case 'ombd':
    case 'imdb':
        // switch (query) {
        //     default:
        //         query='Mr. Nobody';
        // }
        movieSearch();
        break;

    // BAND/CONCERT CASE
    case 'band':
    case 'bands':
    case 'concert':
    case 'concerts':
        bandSearch();
        break;

    // RANDOM CASE
    case 'do-what-it-says':
    case 'random':
    case 'go-nuts':
    case 'planters':
        random();
        break;

    // If anything other than the above commands display HELP
    default:
        showHelp();
        break;
}

// NODE DEPENDENCIES
const axios = require('axios');
const spotify = require('node-spotify-api');
const moment = require('moment');
const dotenv = require('dotenv').config();


let liri = process.argv[2];
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

}
    // LIRI--BANDS IN TOWN
if (liri==='bands') {

}
    // LIRI---OMDB
if (liri==='omdb') {

}
    // LIRI---MOMENT
if (liri==='moment') {

}
    // LIRI---DOTENV
if (liri==='dotenv') {

}
#!/usr/bin/node
/*
  Prints the title of a Star Wars
  based in the id
*/
const request = require('request');

const movieID = process.argv[2];
const URL = `https://swapi-api.hbtn.io/api/films/${movieID}`;

request(URL, (error, response, body) => { // configure the request
  if (!error && response.statusCode === 200) { // check status code
    const film = JSON.parse(body); // parse the response body as JSON
    console.log(film.title);
  } else {
    console.error('Error:', error);
  }
});

#!/usr/bin/node
/*
  Gets the contents of a webpage
  and stores it in a file
*/
const request = require('request');
const fs = require('fs');

const firstArgUrl = process.argv[2];
const secondArgFile = process.argv[3];

request(firstArgUrl, (error, response, body) => { // configure the request
  if (!error && response.statusCode === 200) {
    // Guarda el contenido de la página web en un archivo
    fs.writeFile(secondArgFile, body, (err) => {
      if (err) {
        console.error('Error', err);
      } else {
      }
    });
  } else {
    console.error('Error', error);
  }
});

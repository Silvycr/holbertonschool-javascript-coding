#!/usr/bin/node
/*
  Print number of times that
  Wedge Antille show in the movie
*/

const request = require('request');

const url = process.argv[2];

if (!url) {
  console.error('You must provide a URL.');
  process.exit(1);
}

request(url, (error, res, body) => {
  if (error) console.error(error);
  else {
    const data = JSON.parse(body);
    let i = 0;
    let count = 0;
    while (data.results[i]) {
      data.results[i].characters.forEach((pj) => {
        if (pj.endsWith('/18/')) count++;
      });
      i++;
    }
    console.log(count);
  }
});

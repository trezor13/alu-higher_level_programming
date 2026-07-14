#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    let count = 0;

    data.results.forEach((movie) => {
      movie.characters.forEach((character) => {
        if (character.includes('/18/')) {
          count++;
        }
      });
    });

    console.log(count);
  }
});

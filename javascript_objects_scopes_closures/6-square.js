#!/usr/bin/node

const Square = require('./5-square');

module.exports = class Square extends Square {
  charPrint (c) {
    const ch = c || 'X';

    for (let i = 0; i < this.height; i++) {
      console.log(ch.repeat(this.width));
    }
  }
};

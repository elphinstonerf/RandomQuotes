// RandomQuotes.js

// Simple greeting.
let hello = 'Hello! Todays date is ';
let quote = ".\n Todays quote is:"

// Get Current Time.
const timeElapsed = Date.now();
const today = new Date(timeElapsed);


// Welcome message with date.
console.log(hello + today.toDateString() + quote);


// Retrieve File data.
const fs = require('fs')
const { arrayBuffer } = require('stream/consumers')
let message = fs.readFileSync('Sayings.txt', 'utf-8',  (err, data) => {
    if (err) throw err;
    
    return data;
})

// Creation of array of Sayings.
message = message.split("\n");

// Random number generator.
const randNum = Math.floor(Math.random() * message.length);

// Output of random famous saying from txt file list.
console.log(message[randNum]);

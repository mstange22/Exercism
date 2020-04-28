#!/usr/bin/env node
var fs = require('fs');

const args = process.argv
const argsLength = args.length
const flags = []
const filepaths = []
let searchTerm;

for (let i = 2; i < argsLength; i++) {
  if (args[i].startsWith('-')) {
    flags.push(args[i]);
  } else if (args[i].includes('.txt')) {
    filepaths.push(args[i]);
  } else {
    searchTerm = args[i];
  }
}

// flags
let printLineNumbers = false;
let isCaseInsensitive = false;
let printFileNames = false
let matchEntireLine = false
let isInverted = false
const hasMultipleFiles = filepaths.length > 1

if (flags.length > 0) {
  printLineNumbers = flags.includes('-n')
  isCaseInsensitive = flags.includes('-i')
  printFileNames = flags.includes('-l')
  matchEntireLine = flags.includes('-x')
  isInverted = flags.includes('-v')
}

if (isCaseInsensitive) {
  searchTerm = searchTerm.toUpperCase()
}

const filePromises = []

filepaths.forEach((filepath, i) => {
  filePromises.push(new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        const results = []
        const lines = data.split('\n');
        for (let i = 0; i < lines.length; i++) {
          let line = lines[i]
          let match = false;
    
          if (isCaseInsensitive) {
            line = line.toUpperCase()
          }
          
          if (matchEntireLine) {
            match = !isInverted ? line === searchTerm : line !== searchTerm;
          } else {
            match = !isInverted ? line.includes(searchTerm) : !line.includes(searchTerm);
          }

          if (match) {
            if (printFileNames) {
              results.push(filepath)
              break;
            } else {
              let res = lines[i]
              if (printLineNumbers) {
                res = `${i + 1}:${res}`
              }
              if (hasMultipleFiles) {
                res = `${filepath}:${res}`
              }
              results.push(res)
            }
          }
        }
        resolve(results);
      }
    });
  }))
});

Promise.all(filePromises).then((results) => {
  results.forEach((result) => {
    result.forEach((res) => {
      console.log(res)
    });
  });
});

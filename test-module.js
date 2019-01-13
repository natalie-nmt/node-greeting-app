const fs = require('fs')

exports.read = (file) => {
    fs.readFile(file, (err) => {
      if(err) throw err;
      console.log('Reading your file now...');
    })
  };
  
exports.append = (file, text) => {
    fs.appendFile(file, text, (err) => {
      if(err) throw err;
      console.log('Added text to your file.');
    })
  };
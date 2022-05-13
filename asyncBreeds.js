const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFiles Callback: it has the data");
    if (!error) callback(data);
  });
};

const printBreedWhenThingsAreDone = breed => {
  console.log('Return value: ', breed);
}

const bombay = breedDetailsFromFile('Bombay', printBreedWhenThingsAreDone);
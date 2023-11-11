const fs = require('fs');
const fileName = process.argv[2];
const textToWrite = process.argv[3]

fs.writeFile(fileName, textToWrite, (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
    process.exit(1);
  }
  console.log("The file '${fileName}' has been saved!");
  fs.readFile(fileName, 'utf8', (readErr, data) => {
    if (readErr) {
      console.error('Error reading the file:', readErr);
      process.exit(1);
    }
    console.log('Contents of the file:');
    console.log(data);
  });
});



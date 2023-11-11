var myvar = require('fs');
myvar.writeFileSync('f.txt', 'Hello,this is a text example');
myvar.readFile('f.txt', 'utf8', (err,data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
      }
console.log(data);
})


const fs = require('fs');


if (!fs.existsSync('assets')) 
    fs.mkdir('assets', err => {
      if (err) {
        console.log(err);
      }
      console.log('folder created');
    });
fs.writeFile('assets/versSzoveg.txt', `Csipkebokor vessző,
  elszált egy felhő.
  
  Az élet mint a vessző,
  Amit amit a hátatba vágnak, egy,kettő...
  -Dajka Marcell-` , () => {console.log('file was written');
}
);
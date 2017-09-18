var fs = require('fs');

function pwd(cmd) {
  console.log('called pwd');
  if (cmd === 'pwd') {
    process.stdout.write(__dirname);
  }
}

function ls(cmd) {
  fs.readdir('.', function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      process.stdout.write(file.toString() + '\n');
    });
    process.stdout.write('prompt > ');
  });
}

module.exports = {
  pwd: pwd,
  ls: ls,
};

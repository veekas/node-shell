var fs = require('fs');

function pwd() {
  // console.log('called pwd');
  //if (cmd === 'pwd') {
    process.stdout.write(__dirname);
  //}
}

function ls() {
  fs.readdir('.', function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      process.stdout.write(file.toString() + '\n');
    });
    process.stdout.write('prompt > ');
  });
}

function date() {
  //if (cmd === 'date') {
    var now = new Date().toString();
    process.stdout.write(now);
  //}
}

function echo(args) {
  //if (cmd === 'echo') {
  // console.log(args);
  // console.log(process.argv);
  // console.log('process.env', process.env);
  // console.log('process.env[args.slice(1)]', process.env[args.slice(1)]);
  if (args[0] === '$' && process.env[args.slice(1)]) {
    process.stdout.write(process.env[args.slice(1)]);
  } else {
    process.stdout.write(args);
  }
  //process.stdout.write(process.env);
  //}
}

function cat() {
  // console.log(process.env.PATH);
  // console.log(process.argv);
  fs.readFile(process.argv[1], 'UTF-8', function (err, fileText) {
    if (err) throw err;
    else {
      // console.log('fileText', typeof fileText);
      process.stdout.write(fileText);
    }
  });
}

function head(args, N = 5) {
  var fileTextArr = [];
  // if (!N) N = 5;
  // console.log(N);
  fs.readFile(process.argv[1], 'UTF-8', function (err, fileText) {
    if (err) { throw err; }
    else {
      fileTextArr = fileText.split('\n');
      for (var i = 0; i < N; i++) {
        // console.log('fileTextArr[i]', fileTextArr[i]);
        process.stdout.write(fileTextArr[i] + '\n');
      }
    }
  });
}

function tail(args, N = 5) {
  var fileTextArr = [];
  // if (!N) N = 5;
  // console.log(N);
  fs.readFile(process.argv[1], 'UTF-8', function (err, fileText) {
    if (err) { throw err; }
    else {
      fileTextArr = fileText.split('\n');
      for (var i = fileTextArr.length - N; i < fileTextArr.length; i++) {
        // console.log('fileTextArr[i]', fileTextArr[i]);
        process.stdout.write(fileTextArr[i] + '\n');
      }
    }
  });
}

module.exports = {
  pwd: pwd,
  ls: ls,
  date: date,
  echo: echo,
  cat: cat,
  head: head,
  tail: tail
};

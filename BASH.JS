// console.log(process);
// console.log(Object.keys(process));
// console.log(process.__dirname);
// console.log(__dirname);
var commands = require('./commands.js');
// var fs = require('fs');

process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
  // console.log('data: ', typeof data, data);
  // console.log('process.stdin: ', process.stdin.onread);
  // console.log('process.stdin: ', process.stdin.onwrite);
  var cmd = data.toString().trim();
  commands[cmd](cmd);
  if (cmd === 'date') {
    now = new Date().toString();
    process.stdout.write(now);
  }
  else process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});


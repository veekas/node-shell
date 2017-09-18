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
  var input = data.toString().trim();
  var args, cmd = null;
  if (input.indexOf(' ') >= 0) {
    args = input.slice(input.indexOf(' ') + 1);
    cmd = input.slice(0, input.indexOf(' '));
  } else {
    cmd = input;
  }
  if (commands[cmd]) {
    commands[cmd](args);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});

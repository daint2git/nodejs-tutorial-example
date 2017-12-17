let buffer = new Buffer("Hello","utf-8");
console.log(buffer);
console.log('----');
console.log(buffer.toString());
console.log('----');
console.log(buffer.toJSON());
console.log('----');
console.log(JSON.stringify(buffer));
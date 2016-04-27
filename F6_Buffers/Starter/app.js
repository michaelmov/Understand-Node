var buf = new Buffer('Hello', 'utf8');

console.log(buf);

console.log(buf.toString()); // Convert buffer to string
console.log(buf.toJSON()); // Convert buffer to JSON format
console.log(buf[2]); // Get buffer value at a particular index

buf.write('wo'); // Overwrite data in the buffer
console.log(buf.toString());





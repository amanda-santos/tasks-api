const buffer = Buffer.from("hello");
const buffer2 = Buffer.from("oi");

console.log("Buffer 1", buffer); // Buffer 1 <Buffer 68 65 6c 6c 6f>
console.log("Buffer 2", buffer2); // Buffer 2 <Buffer 6f 69>
console.log("Buffer converted to JSON", buffer.toJSON()); // Buffer converted to JSON { type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] }

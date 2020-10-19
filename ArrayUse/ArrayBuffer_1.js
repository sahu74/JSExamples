let buffer = new ArrayBuffer(16); // create a buffer of length 16
let view = new Uint32Array(buffer); // treat buffer as a sequence of 32-bit integers
console.log(`BYTES_PER_ELEMENT: ${view.BYTES_PER_ELEMENT}`); // 4 bytes per integer

console.log("view.length : "+view.length); // 4, it stores that many integers
console.log(`view.byteLength = ${view.byteLength}`); // 16, the size in bytes

// let's write a value
view[0] = 12345678;
console.log("------------------------------------" + view);
// iterate over values
for(let num of view) {
  console.log(num); // 123456, then 0, 0, 0 (4 values total)
}
console.log("------------------------------------");

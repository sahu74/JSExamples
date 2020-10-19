//! new array programs:

let buffer = new ArrayBuffer(16);
if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}


let int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log('Entry ' + i + ': ' + int16View[i]);
}

let int32View = new Int32Array(buffer);
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}


console.log("===============================");
console.log(int32View.length);
console.log(int32View);
console.log("===============================");

let buf = new ArrayBuffer(6);
buf[0]=6;
buf[1]=7;
buf[2]=8;
buf[3]=9;

// ... read the data into the buffer ...

let idView = new Uint8Array(buf, 0, 4);
console.log(buf);
console.log("idView: "+idView);
//let usernameView = new Uint8Array(buf, 4, 16);
//let amountDueView = new Float32Array(buf, 20, 1);

// From another TypedArray
var tt = [1,2,3,4];
var x = new Uint32Array(tt);
console.log("Hara X value " +x[0]); // 21
var y = new Uint32Array(x);
console.log(y[0]); // 21

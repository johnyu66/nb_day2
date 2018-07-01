let buffer=Buffer.alloc(32);//malloc alloc
//let buffer1=Buffer.allocUnsafe(32);
//buffer.writeInt16LE(12);
let len=buffer.write("中","UTF-8");
console.log(buffer.toString("UTF-8",0,len));
console.log(buffer);
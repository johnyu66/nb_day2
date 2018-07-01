 let fs=require('fs');
let ms=fs.createWriteStream("./john2.data");
//ms.write(Buffer.from("中国人1233"));
let input=fs.createReadStream("./john.data");
//input.setEncoding("UTF-8");
// input.on("data",(buf)=>{
 //     ms.write(buf);
 // })
 input.pipe(ms);
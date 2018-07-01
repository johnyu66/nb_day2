

// function systemcall(cb) {
//     console.log("before systemCall....");
//     setTimeout(()=>{
//         let fd=12;
//         cb(fd);
//     },1000);
// }
// function myfn(fd) {
//     console.log(fd);
//
// }
// systemcall(myfn);
// console.log("end...,");


// const Emiter=require('events');
// let server=new Emiter();
// server.on('listen',(sk)=>{
//     console.log("listening...."+sk);
// });
// server.on('connect',(x)=>{
//     console.log("has a client..."+x);
// })
// server.on("colose",()=>{
//     console.log("server close....");
// })
//
// server.emit('listen',"socket");
// let m=setInterval(()=>{
//     server.emit("connect",Math.random())
// },1000);

// const fs=require('fs');
// fs.open("./a.txt",'w+',(err,fd)=>{
//     console.log(fd);
// })
// console.log("end....")

const math=require('./math.js');
let m=math.sum(2,3);
console.log(m);

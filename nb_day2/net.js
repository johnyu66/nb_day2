 const net=require('net');

let server=net.createServer();
server.on("connection",(socket)=>{
    socket.write("hi,I am server!!!");
    socket.setEncoding("UTF-8");
    socket.on("data",(buf)=>{
        console.log(buf);
    })
});
server.listen(9001,()=>{
    console.log("sever start....");
});


// let socket=new net.Socket();
// socket.connect(9000,'127.0.0.1',()=>{
//     socket.write("hello,I am client....");
//     socket.on("data",(x)=>{
//         console.log(x);
//     })
// })
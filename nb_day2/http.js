const http=require("http");
const url=require("url");
const fs=require("fs");
let server=http.createServer();

server.on('request',(req,res)=>{
   // JSON.stringify(req.headers);

    let obj=url.parse(req.url,true);
    let path="./public"+obj.pathname;
    console.log(path)
    let input=fs.createReadStream(path);
    input.pipe(res);

    //res.end();
});
server.listen(9002,()=>{
    console.log("http server start...");
})
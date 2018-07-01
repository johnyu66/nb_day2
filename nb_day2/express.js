const express=require('express');
let app =express();
app.route("/")
    .get((req,res)=>{
        res.end("do get");
    })
    .post((req,res)=>{
        res.end("do post");
    })

let router=express.Router();

router.route("/")
    .get((req,res)=>{
        res.end("books get....");
    });
server.use("/books",router)

server=https.createServer();
server.listen(9008,app);

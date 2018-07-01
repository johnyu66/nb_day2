const express=require('express');
const http=require('http');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const session=require('express-session');
let app=express();
let server =http.createServer(app);
app.set("views",__dirname+"/views");
app.set("view engine","ejs");
app.use("/",(req,res,next)=>{
    console.log("middle ware work...");
    next();
});
app.use(session({secret:"john",resave:true, saveUninitialized :true}));
//app.use(morgan());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use("/crm/" ,(req,res,next)=>{
//
// })
app.get("/books",(req,res)=>{
    res.header("Content-Type","application/json");
    res.render("books",{book:"<script>console.log('ehllo')</script>"});
})
app.get("/other",(req,res)=>{
    res.redirect("http://www.sohu.com");
})
app.use(express.static(__dirname+"/public"));
app.get("/",(req,res)=>{
    req.session.user='john';
    res.send("hello");
});
app.get("/readme",(req,res)=>{
    res.send("i am :"+req.session.user);
})

app.get("/login",(req,res)=>{
    res.send(req.query.name+"..."+req.query.age);
})
app.get("/books/:bid/author/:aid",(req,res)=>{
    res.send(req.params.bid+"..."+req.params.aid);
})
app.post("/books",(req,res)=>{
    console.log(req.body);
    res.send("ok")
});

server.listen(9008);

//s%3A0GBRzJbVe7rwJV_-Umwe_vUrz_H9fAkN.sAMJyGUrhokg9zauyGGVYp%2BLKuvVjZLthVlbAwTU4Qw
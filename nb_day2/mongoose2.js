const mongoose=require('mongoose');
let UserSchema=new mongoose.Schema({
    uname:String,age:Number
});
mongoose.model("user",UserSchema);
let User=mongoose.model("user");

mongoose.connect("mongodb://localhost:27017/test8",(err)=>{
    if(!err){
        User.find({age:{$gt:30}},function (err,us) {
            console.log(us);
            mongoose.disconnect();
        })


    }
});



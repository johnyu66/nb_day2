const mongoose=require('mongoose');
let BookSchema=new mongoose.Schema({
    bname:String,price:Number
});
mongoose.model("book",BookSchema);
let Book=mongoose.model("book");

mongoose.connect("mongodb://localhost:27017/test8",(err)=>{
    if(!err){
        // let book=new Book({bname:"tom",price:23.45});
        // book.save((err,b)=>{
        //     console.log(b);
        //     mongoose.disconnect();
        // })

        // Book.findByIdAndUpdate("5b35eb3f723d820f5b5f5d4c",{bname:"xxx"},function (err,o) {
        //     Book.findById("5b35eb3f723d820f5b5f5d4c",(err,obj)=>{
        //         console.log(obj)
        //         mongoose.disconnect();
        //     })
        //
        // })
        Book.findByIdAndDelete("5b35eb3f723d820f5b5f5d4c",(err,o)=>{
            console.log(o);
            mongoose.disconnect();
        });

    }
});



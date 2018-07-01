const fs=require('fs');
// fs.mkdirSync("abc1");
// let fd=fs.openSync("./abc1/a.txt","w+");
// fs.writeSync(fd,Buffer.from("中国","UTF-8"));

fs.mkdir("abc2",()=>{
    fs.open("./abc2/a.txt","r",(err,fd)=>{
        fs.write(fd,Buffer.from("中国","UTF-8"),()=>{
            console.log("工作完成");
        })
    })
})
//callback hell
console.log("ohter....");
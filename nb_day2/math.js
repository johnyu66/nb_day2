function sum(a,b) {
    other();
    return a+b;
}
function multi() {

}
function other() {
    console.log("ohter....")
}
let obj={};
obj.sum=sum;
module.exports=obj;


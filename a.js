let obj ={
  name:"YANG",
  age:22,
  hobby:"geme"
}

for(var i in obj){
  console.log(i +":"+obj[i])  
}

/*
  * key value
    Object.keys(obj) value :返回一个数组
  * ["YANG",22,"geme"]
*/
Object.keys(obj).map(i=>{
  console.log(i+":"+obj[i]);
})